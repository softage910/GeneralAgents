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

import SelectedUser from "./SelectedUser";
import EmailSearchDropdown from "./EmailSearchDropdown";
import ParameterDropdown from "./ParameterDropdown";

const ReportGeneratorButton = dynamic(() => import("./ReportSection"), {
  ssr: false,
});
const GenerateUserReportButton = dynamic(() => import("./generateReport"), {
  ssr: false,
});

console.log("Component rendering: TieredDashboard");

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

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function TieredDashboard() {
  const [allData, setAllData] = useState<Record<string, Record<string, number>>>({});
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedParam, setSelectedParam] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);


  console.log("State initialized:", { selectedEmail, selectedParam, showWarning });

  useEffect(() => {
    console.log("useEffect [db] - Fetching data...");
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Monthly_Data", "Monthly_User_Performance");
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          console.log("Data document not found in Firebase.");
          return;
        }

        const rawData = docSnap.data() as Record<string, Record<string, number>>;
        console.log("Raw data fetched:", rawData);
        const cleanedData: typeof rawData = {};
        for (const [user, values] of Object.entries(rawData)) {
          const nonZeroEntries = Object.fromEntries(
            Object.entries(values).filter(([, value]) => value > 0)
          );
          if (Object.keys(nonZeroEntries).length) {
            cleanedData[user] = nonZeroEntries;
          }
        }
        setAllData(cleanedData);
        console.log("Cleaned data set:", cleanedData);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
      
    };
    fetchData();
  }, [db]); // Added db as a dependency

  useEffect(() => {
    console.log("useEffect [] - Checking sessionStorage for stored selections.");
    const storedEmail = sessionStorage.getItem("selectedEmail");
    const storedParam = sessionStorage.getItem("selectedParam");
    if (storedEmail) {
      setSelectedEmail(storedEmail);
      console.log("Email from sessionStorage:", storedEmail);
    }
    if (storedParam) {
      setSelectedParam(storedParam);
      console.log("Parameter from sessionStorage:", storedParam);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect [selectedParam] - Checking if parameter is selected to hide warning.");
    if (selectedParam) {
      setShowWarning(false);
      console.log("Parameter selected, hiding warning.");
    }
  }, [selectedParam]);

  const getTierData = (tier: "low" | "mid" | "high") => {
    console.log(`getTierData for tier: ${tier}, selectedParam: ${selectedParam}`);
    if (!selectedParam || !Object.keys(allData).length) {
      console.log("No selected parameter or data is empty.");
      return null;
    }
    const users = Object.entries(allData)
      .filter(([, vals]) => vals[selectedParam] > 0)
      .map(([email, vals]) => ({ email, value: vals[selectedParam] }));

    if (!users.length) {
      console.log("No users found with a value greater than 0 for the selected parameter.");
      return null;
    }

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

    if (!sorted.length) {
      console.log(`No users in the ${tier} tier for the selected parameter.`);
      return null;
    }

    const chartData = {
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
    };
    console.log(`Chart data for ${tier} tier:`, chartData);
    return chartData;
  };

  const renderChart = (tier: "low" | "mid" | "high") => {
    const chartData = getTierData(tier);
    if (!chartData) {
      console.log(`No chart data to render for ${tier} tier.`);
      return null;
    }
    const color = tier === "low" ? "red" : tier === "mid" ? "orange" : "green";
    const chartId = `chart-${tier}`;

    const handleCopy = async () => {
      const chartEl = document.getElementById(chartId);
      if (!chartEl) return;

      const buttons = chartEl.querySelectorAll(".chart-buttons");
      buttons.forEach((btn) => ((btn as HTMLElement).style.display = "none"));

      try {
        const html2canvas = (await import("html2canvas")).default;
        const canvas = await html2canvas(chartEl);
        canvas.toBlob(async (blob) => {
          if (blob) {
            try {
              await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
              ]);
            } catch (copyError) {
              console.error("Failed to copy chart:", copyError);
              alert("Failed to copy chart.");
            }
          }
          buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
        });
      } catch (importError) {
        console.error("Error importing html2canvas:", importError);
        alert("Failed to copy chart due to an error.");
        buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
      }
    };

    const handleDownload = async () => {
      const chartEl = document.getElementById(chartId);
      if (!chartEl) return;

      const buttons = chartEl.querySelectorAll(".chart-buttons");
      buttons.forEach((btn) => ((btn as HTMLElement).style.display = "none"));

      try {
        const html2canvas = (await import("html2canvas")).default;
        const canvas = await html2canvas(chartEl);
        const link = document.createElement("a");
        link.download = `${tier}-tier-${selectedParam}.png`;
        link.href = canvas.toDataURL();
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);

        buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
      } catch (importError) {
        console.error("Error importing html2canvas:", importError);
        alert("Failed to download chart due to an error.");
        buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
      }
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
            height: "53vh",
            padding: "1rem",
            overflow: "hidden",
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
          {/* Copy/Download Buttons */}
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
            <button
              onClick={handleCopy}
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: "4px",
                color: "white",
                padding: "4px 6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              📋
            </button>
            <button
              onClick={handleDownload}
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: "4px",
                color: "white",
                padding: "4px 6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ⬇️
            </button>
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
      {/* 🚨 Warning Popup */}
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

      <div
        style={{
          height: "75vh",
          overflowY: "scroll",
          padding: "2rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          {/* Header + Dropdowns */}
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

          {/* Sub-header + Generate button */}
          {/* Sub-header with dynamic heading and right-aligned button */}
          {/* Sub-header with fixed left/right alignment */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            {/* Left: Heading (only if param is selected) */}
            <div>
              {selectedParam ? (
                <h2 style={{ margin: 0, fontSize: "13px", fontWeight: 500, color: "white" }}>
                  {selectedEmail
                    ? `${selectedEmail}'s ${selectedParam} till ${new Date(Date.now() - 86400000).toLocaleDateString()}`
                    : `Per Tier Reports of ${selectedParam} till ${new Date(Date.now() - 86400000).toLocaleDateString()}`}
                </h2>
              ) : null}
            </div>

            {/* Right: Report button — always shown at right */}
            <div>
              {selectedEmail && selectedParam ? (
                <GenerateUserReportButton selectedEmail={selectedEmail} allData={allData} />
              ) : selectedParam ? (
                <ReportGeneratorButton allData={allData} selectedParam={selectedParam} />
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
                    transition: "all 0.3s ease",
                  }}
                >
                  Generate Report
                </button>
              )}
            </div>
          </div>

          {/* Charts or User Report */}
          {selectedEmail ? (
  <SelectedUser email={selectedEmail} selectedParam={selectedParam} />
) : selectedParam && dataLoaded ? (
  <div
    style={{
      backgroundColor: "#212121",
      padding: "2rem",
      borderRadius: "12px",
      marginTop: "1rem",
    }}
  >
    {["high", "mid", "low"].map((tier) => {
      const chart = getTierData(tier as "low" | "mid" | "high");
      if (!chart) return null;
      return renderChart(tier as "low" | "mid" | "high");
    })}
  </div>
) : dataLoaded && !selectedParam ? (
  <div
    style={{
      textAlign: "center",
      padding: "2rem",
      backgroundColor: "transparent",
      borderRadius: "8px",
      fontSize: "16px",
    }}
  >
    <p style={{ fontStyle: "italic", color: "#777" }}>
      Select a Parameter for Results...
    </p>
  </div>
) : (
  <div
    style={{
      textAlign: "center",
      padding: "2rem",
      backgroundColor: "transparent",
      borderRadius: "8px",
      fontSize: "16px",
    }}
  >
    <p style={{ fontStyle: "italic", color: "#777" }}>Loading data...</p>
  </div>
)}


        </div>
      </div>
    </>
  );
}