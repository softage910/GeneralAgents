"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
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
import SelectedUser from "./SelectedUser";
import EmailSearchDropdown from "./EmailSearchDropdown";
import ParameterDropdown from "./ParameterDropdown";

const ReportGeneratorButton = dynamic(() => import("./ReportSection"), { ssr: false });
const GenerateUserReportButton = dynamic(() => import("./generateReport"), { ssr: false });

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const firebaseConfig2 = {
  apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
  authDomain: "generalagents-f8993.firebaseapp.com",
  databaseURL: "https://generalagents-f8993-default-rtdb.firebaseio.com",
  projectId: "generalagents-f8993",
  storageBucket: "generalagents-f8993.appspot.com",
  messagingSenderId: "560678836746",
  appId: "1:560678836746:web:84cda659e267c9acea9df3",
  measurementId: "G-EG0PCF0M0J",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig2) : getApps()[0];
const db = getFirestore(app);

export default function TieredDashboard() {
  const [allData, setAllData] = useState<Record<string, Record<string, number>>>({});
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedParam, setSelectedParam] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Monthly_Data", "Monthly_User_Performance");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const rawData = docSnap.data() as Record<string, Record<string, number>>;
        const cleaned: typeof rawData = {};
        for (const [user, values] of Object.entries(rawData)) {
          const nonZero = Object.fromEntries(
            Object.entries(values).filter(([, v]) => v > 0 && typeof v === "number" && !isNaN(v))
          );
          if (Object.keys(nonZero).length) cleaned[user] = nonZero;
        }
        setAllData(cleaned);
      }
      setDataLoaded(true);
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
      .filter(([, vals]) => vals[selectedParam] > 0)
      .map(([email, vals]) => ({ email, value: vals[selectedParam] }))
      .filter((u) => typeof u.value === "number" && !isNaN(u.value));

    if (!users.length) return null;

    const min = Math.min(...users.map((u) => u.value));
    const max = Math.max(...users.map((u) => u.value));
    const normalize = (val: number) => (min === max ? 100 : ((val - min) / (max - min)) * 100);

    const sorted = users
      .map((u) => ({ ...u, norm: normalize(u.value) }))
      .filter((u) =>
        tier === "low" ? u.norm < 33 :
        tier === "mid" ? u.norm >= 33 && u.norm < 66 :
        u.norm >= 66
      )
      .sort((a, b) => a.value - b.value);

    if (!sorted.length) return null;

    return {
      labels: sorted.map((u) => u.email),
      datasets: [
        {
          label: `${tier.toUpperCase()} Tier`,
          data: sorted.map((u) => u.value),
          borderColor: tier === "low" ? "red" : tier === "mid" ? "orange" : "green",
          backgroundColor: "transparent",
          fill: false,
          tension: 0,
          pointRadius: 4,
        },
      ],
    };
  };

  const renderChart = (tier: "low" | "mid" | "high") => {
    const chartData = getTierData(tier);
    if (!chartData) return null;
    const color = tier === "low" ? "red" : tier === "mid" ? "orange" : "green";
    const chartId = `chart-${tier}`;

    const handleCopy = async () => {
      const el = document.getElementById(chartId);
      if (!el) return;

      const buttons = el.querySelectorAll(".chart-buttons");
      buttons.forEach((btn) => ((btn as HTMLElement).style.display = "none"));

      const canvas = await html2canvas(el);
      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        }
        buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
      });
    };

    const handleDownload = async () => {
      const el = document.getElementById(chartId);
      if (!el) return;

      const buttons = el.querySelectorAll(".chart-buttons");
      buttons.forEach((btn) => ((btn as HTMLElement).style.display = "none"));

      const canvas = await html2canvas(el);
      const link = document.createElement("a");
      link.download = `${tier}-tier-${selectedParam}.png`;
      link.href = canvas.toDataURL();
      link.click();

      buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
    };

    return (
      <div key={tier} style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "white", marginBottom: "0.5rem" }}>
          {tier.toUpperCase()} Tier: <span style={{ color }}>{selectedParam}</span>
        </h3>
        <div
          id={chartId}
          style={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: "12px",
            height: "50vh",
            padding: "1rem",
          }}
          onMouseEnter={() => {
            const btns = document.querySelectorAll(`#${chartId} .chart-buttons`);
            btns.forEach((btn) => ((btn as HTMLElement).style.opacity = "1"));
          }}
          onMouseLeave={() => {
            const btns = document.querySelectorAll(`#${chartId} .chart-buttons`);
            btns.forEach((btn) => ((btn as HTMLElement).style.opacity = "0"));
          }}
        >
          {/* Buttons */}
          <div
            className="chart-buttons"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              display: "flex",
              gap: "8px",
              opacity: 0,
              transition: "opacity 0.3s ease",
              zIndex: 10,
            }}
          >
            <button onClick={handleCopy} style={iconButtonStyle}>📋</button>
            <button onClick={handleDownload} style={iconButtonStyle}>⬇️</button>
          </div>

          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" } },
              scales: {
                y: { beginAtZero: true, ticks: { precision: 0 } },
              },
            }}
          />
        </div>
      </div>
    );
  };

  const iconButtonStyle = {
    background: "rgba(0,0,0,0.6)",
    border: "none",
    borderRadius: "4px",
    color: "white",
    padding: "4px 6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <>
      {showWarning && (
        <div style={{
          backgroundColor: "#e74c3c",
          color: "white",
          padding: "8px",
          borderRadius: "6px",
          marginTop: "10px",
          textAlign: "center",
          position: "absolute",
          top: "10vh",
          right: "10px",
          width: "15vw",
          zIndex: 10,
        }}>
          Select a Parameter Before Report Generation
        </div>
      )}

      <div style={{ height: "75vh", overflowY: "scroll", padding: "2rem",scrollbarWidth: "none",        // Firefox
    msOverflowStyle: "none",       // IE/Edge
    WebkitOverflowScrolling: "touch", }}>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between" ,alignItems:"center"}}>
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

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", alignItems:"center"
           }}>
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
                    backgroundColor: "#333",
                    color: "#aaa",
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

          {selectedEmail ? (
            <SelectedUser email={selectedEmail} selectedParam={selectedParam} />
          ) : dataLoaded && selectedParam ? (
            <div
              style={{
                backgroundColor: "#212121",
                padding: "2rem",
                borderRadius: "12px",
                marginTop: "1rem",
              }}
            >
              {["high", "mid", "low"]
                .map((tier) => renderChart(tier as "low" | "mid" | "high"))
                .filter(Boolean)}
            </div>
          ) : (
            <div style={{ textAlign: "center", marginTop: "2rem", color: "#aaa" }}>
              Select a parameter to view the charts
            </div>
          )}
        </div>
      </div>
    </>
  );
}
