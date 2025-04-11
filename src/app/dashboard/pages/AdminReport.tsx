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

// Dynamic imports to prevent SSR
const ReportGeneratorButton = dynamic(() => import("./ReportSection"), { ssr: false });
const GenerateUserReportButton = dynamic(() => import("./generateReport"), { ssr: false });
const SelectedUser = dynamic(() => import("./SelectedUser"), { ssr: false });
const EmailSearchDropdown = dynamic(() => import("./EmailSearchDropdown"), { ssr: false });
const ParameterDropdown = dynamic(() => import("./ParameterDropdown"), { ssr: false });

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const firebaseConfig = {
  apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
  authDomain: "generalagents-f8993.firebaseapp.com",
  databaseURL: "https://generalagents-f8993-default-rtdb.firebaseio.com",
  projectId: "generalagents-f8993",
  storageBucket: "generalagents-f8993.appspot.com",
  messagingSenderId: "560678836746",
  appId: "1:560678836746:web:84cda659e267c9acea9df3",
  measurementId: "G-EG0PCF0M0J",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export default function TieredDashboard() {
  const [allData, setAllData] = useState<Record<string, Record<string, number>>>({});
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedParam, setSelectedParam] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching Firestore data...");
      const docRef = doc(db, "Monthly_Data", "Monthly_User_Performance");
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        console.warn("No Firestore document found.");
        return;
      }

      const rawData = docSnap.data() as Record<string, Record<string, number>>;
      const cleanedData: typeof rawData = {};

      for (const [user, values] of Object.entries(rawData)) {
        const nonZeroEntries = Object.fromEntries(
          Object.entries(values).filter(([, value]) => value > 0)
        );
        if (Object.keys(nonZeroEntries).length) {
          cleanedData[user] = nonZeroEntries;
        }
      }

      console.log("Final cleaned data:", cleanedData);
      setAllData(cleanedData);
      setDataReady(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("selectedEmail");
    const storedParam = sessionStorage.getItem("selectedParam");
    if (storedEmail) setSelectedEmail(storedEmail);
    if (storedParam) setSelectedParam(storedParam);
  }, []);

  useEffect(() => {
    if (selectedParam) setShowWarning(false);
  }, [selectedParam]);

  const getTierData = (tier: "low" | "mid" | "high") => {
    if (!selectedParam || !Object.keys(allData).length) return null;

    const users = Object.entries(allData)
      .filter(([, vals]) => vals[selectedParam] > 0)
      .map(([email, vals]) => ({ email, value: vals[selectedParam] }));

    if (!users.length) return null;

    const min = Math.min(...users.map(u => u.value));
    const max = Math.max(...users.map(u => u.value));
    const normalize = (val: number) => (min === max ? 100 : ((val - min) / (max - min)) * 100);

    const sorted = users
      .map(u => ({ ...u, norm: normalize(u.value) }))
      .filter(u =>
        (tier === "low" && u.norm < 33) ||
        (tier === "mid" && u.norm >= 33 && u.norm < 66) ||
        (tier === "high" && u.norm >= 66)
      )
      .sort((a, b) => a.value - b.value);

    return sorted.length
      ? {
          labels: sorted.map(u => u.email),
          datasets: [
            {
              label: `${tier.toUpperCase()} Tier`,
              data: sorted.map(u => u.value),
              borderColor: tier === "low" ? "red" : tier === "mid" ? "orange" : "green",
              backgroundColor: "transparent",
              fill: false,
              tension: 0.3,
            },
          ],
        }
      : null;
  };

  const renderChart = (tier: "low" | "mid" | "high") => {
    const chartData = getTierData(tier);
    if (!chartData) return null;

    return (
      <div key={tier} style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "white", marginBottom: "0.5rem" }}>
          {tier.toUpperCase()} Tier: <span style={{ color: tier === "low" ? "red" : tier === "mid" ? "orange" : "green" }}>{selectedParam}</span>
        </h3>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            height: "53vh",
            padding: "1rem",
          }}
        >
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
                y: {
                  beginAtZero: true,
                  ticks: { precision: 0 },
                  title: { display: true, text: selectedParam },
                },
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
    <>
      {/* Warning Message */}
      <div
        style={{
          backgroundColor: "#e74c3c",
          color: "white",
          padding: "8px",
          borderRadius: "6px",
          marginTop: "10px",
          textAlign: "center",
          fontWeight: 500,
          fontSize: "13px",
          position: "absolute",
          top: "10vh",
          right: "10px",
          width: "13vw",
          opacity: showWarning ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        }}
      >
        Select a Parameter Before Report Generation
      </div>

      <div style={{ height: "75vh", overflowY: "scroll", padding: "2rem" }}>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          {/* Dropdowns */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Report Section</h1>
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

          {/* Report Action Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
            <div>
              {selectedParam && (
                <h2 style={{ margin: 0, fontSize: "13px", fontWeight: 500, color: "white" }}>
                  {selectedEmail
                    ? `${selectedEmail}'s ${selectedParam} till ${new Date(Date.now() - 86400000).toLocaleDateString()}`
                    : `Per Tier Reports of ${selectedParam} till ${new Date(Date.now() - 86400000).toLocaleDateString()}`}
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
                    backgroundColor: "rgb(33 33 33 / 59%)",
                    color: "#ffffff6b",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "14px",
                    cursor: "not-allowed",
                  }}
                >
                  Generate Report
                </button>
              )}
            </div>
          </div>

          {/* Render charts or user report */}
          {selectedEmail ? (
            <SelectedUser email={selectedEmail} selectedParam={selectedParam} />
          ) : selectedParam && dataReady ? (
            <div
              style={{
                backgroundColor: "#212121",
                padding: "2rem",
                borderRadius: "12px",
                marginTop: "1rem",
              }}
            >
              {["high", "mid", "low"].map((tier) => renderChart(tier as "low" | "mid" | "high"))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <p style={{ fontStyle: "italic", color: "#777" }}>Select a Parameter for Results...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
