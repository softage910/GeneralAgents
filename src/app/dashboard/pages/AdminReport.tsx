"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import dynamic from "next/dynamic";

// Dynamically import only on client
const ReportGeneratorButton = dynamic(() => import("./ReportSection"), { ssr: false });
const GenerateUserReportButton = dynamic(() => import("./generateReport"), { ssr: false });
const SelectedUser = dynamic(() => import("./SelectedUser"), { ssr: false });
const EmailSearchDropdown = dynamic(() => import("./EmailSearchDropdown"), { ssr: false });
const ParameterDropdown = dynamic(() => import("./ParameterDropdown"), { ssr: false });

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const firebaseConfig = {
  apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
  authDomain: "generalagents-f8993.firebaseapp.com",
  projectId: "generalagents-f8993",
  storageBucket: "generalagents-f8993.appspot.com",
  messagingSenderId: "560678836746",
  appId: "1:560678836746:web:84cda659e267c9acea9df3",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export default function TieredDashboard() {
  const [allData, setAllData] = useState<Record<string, Record<string, number>>>({});
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedParam, setSelectedParam] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Monthly_Data", "Monthly_User_Performance");
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return;

      const rawData = docSnap.data() as Record<string, Record<string, number>>;
      const cleanedData: typeof rawData = {};
      for (const [user, values] of Object.entries(rawData)) {
        const filtered = Object.fromEntries(
          Object.entries(values).filter(([, value]) => value > 0)
        );
        if (Object.keys(filtered).length) cleanedData[user] = filtered;
      }
      setAllData(cleanedData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("selectedEmail");
    const storedParam = sessionStorage.getItem("selectedParam");
    if (storedEmail) setSelectedEmail(storedEmail);
    if (storedParam) setSelectedParam(storedParam);
  }, []);

  const getTierData = (tier: "low" | "mid" | "high") => {
    if (!selectedParam || !Object.keys(allData).length) return null;

    const users = Object.entries(allData)
      .filter(([, values]) => values[selectedParam] > 0)
      .map(([email, values]) => ({ email, value: values[selectedParam] }));

    if (!users.length) return null;

    const min = Math.min(...users.map((u) => u.value));
    const max = Math.max(...users.map((u) => u.value));
    const normalize = (val: number) => (min === max ? 100 : ((val - min) / (max - min)) * 100);

    const filtered = users
      .map((u) => ({ ...u, norm: normalize(u.value) }))
      .filter((u) =>
        tier === "low" ? u.norm < 33 : tier === "mid" ? u.norm < 66 && u.norm >= 33 : u.norm >= 66
      );

    if (!filtered.length) return null;

    return {
      labels: filtered.map((u) => u.email),
      datasets: [
        {
          label: `${tier.toUpperCase()} Tier`,
          data: filtered.map((u) => u.value),
          borderColor: tier === "low" ? "red" : tier === "mid" ? "orange" : "green",
          backgroundColor: "transparent",
          fill: false,
          tension: 0.3,
        },
      ],
    };
  };

  const renderChart = (tier: "low" | "mid" | "high") => {
    const chartData = getTierData(tier);
    if (!chartData) return null;

    const chartId = `chart-${tier}`;
    const color = tier === "low" ? "red" : tier === "mid" ? "orange" : "green";

    const handleDownload = async () => {
      const chartEl = document.getElementById(chartId);
      if (!chartEl) return;

      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(chartEl);
      const link = document.createElement("a");
      link.download = `${tier}-tier-${selectedParam}.png`;
      link.href = canvas.toDataURL();
      link.click();
    };

    const handleCopy = async () => {
      const chartEl = document.getElementById(chartId);
      if (!chartEl) return;

      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(chartEl);
      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
        }
      });
    };

    return (
      <div key={tier} style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "white", marginBottom: "0.5rem" }}>
          {tier.toUpperCase()} Tier: <span style={{ color }}>{selectedParam}</span>
        </h3>
        <div
          id={chartId}
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "12px",
            position: "relative",
            height: "53vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              display: "flex",
              gap: "8px",
              zIndex: 10,
            }}
          >
            <button onClick={handleCopy}>📋</button>
            <button onClick={handleDownload}>⬇️</button>
          </div>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "top" },
                title: { display: false },
              },
              scales: {
                y: { beginAtZero: true },
                x: {
                  ticks: { maxRotation: 90, minRotation: 45 },
                },
              },
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <h1>Report Section</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ParameterDropdown
            allData={allData}
            selectedEmail={selectedEmail}
            selectedParam={selectedParam}
            setSelectedParam={setSelectedParam}
          />
          <EmailSearchDropdown
            emails={Object.keys(allData)}
            selectedEmail={selectedEmail}
            setSelectedEmail={setSelectedEmail}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div>
          {selectedParam && (
            <h2 style={{ fontSize: "14px", fontWeight: 500, color: "white" }}>
              {selectedEmail
                ? `${selectedEmail}'s ${selectedParam}`
                : `Tiered performance for ${selectedParam}`}
            </h2>
          )}
        </div>
        <div>
          {selectedEmail && selectedParam ? (
            <GenerateUserReportButton selectedEmail={selectedEmail} allData={allData} />
          ) : selectedParam ? (
            <ReportGeneratorButton selectedParam={selectedParam} allData={allData} />
          ) : (
            <button
              onClick={() => {
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 2000);
              }}
              style={{
                backgroundColor: "#ccc",
                color: "#333",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "not-allowed",
              }}
            >
              Generate Report
            </button>
          )}
        </div>
      </div>

      {/* Tiered Charts or Selected User */}
      {selectedEmail ? (
        <SelectedUser email={selectedEmail} selectedParam={selectedParam} />
      ) : selectedParam ? (
        <div style={{ backgroundColor: "#212121", padding: "1.5rem", borderRadius: "10px" }}>
          {["high", "mid", "low"]
            .map((tier) => renderChart(tier as "low" | "mid" | "high"))
            .filter(Boolean)}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>
          Please select a parameter to view charts.
        </p>
      )}
    </div>
  );
}
