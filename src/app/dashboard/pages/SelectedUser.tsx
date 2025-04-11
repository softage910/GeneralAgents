"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Line } from "react-chartjs-2";
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

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const db = getFirestore();

interface SelectedUserProps {
  email: string;
  selectedParam: string;
}

interface HighestValueParams {
  [param: string]: number[];
}

interface UserPerformanceData {
  [param: string]: number;
}

const SelectedUser: React.FC<SelectedUserProps> = ({ email, selectedParam }) => {
  const [data, setData] = useState<HighestValueParams | null>(null);
  const [userPerformance, setUserPerformance] = useState<UserPerformanceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const highestRef = doc(db, "Monthly_Data", "Highest_value_Parameters");
      const userRef = doc(db, "Monthly_Data", "Monthly_User_Performance");

      const [highSnap, userSnap] = await Promise.all([getDoc(highestRef), getDoc(userRef)]);

      if (highSnap.exists()) setData(highSnap.data() as HighestValueParams);

      if (userSnap.exists()) {
        const users = userSnap.data() as Record<string, UserPerformanceData>;
        if (users[email]) setUserPerformance(users[email]);
      }
    };

    fetchData();
  }, [email]);

  const getChartData = () => {
    if (!data || !userPerformance || !Array.isArray(data[selectedParam])) return null;

    const rawValues = data[selectedParam].filter((v: number) => v > 0);
    const values = [...new Set(rawValues)].sort((a, b) => a - b);
    if (!values.length) return null;

    const topValue = values[values.length - 1];
    const userValue = userPerformance[selectedParam];

    const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
    const stdDev = Math.sqrt(values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length);
    const threshold = stdDev * 0.4;

    const importantPoints = new Map<number, string>();
    importantPoints.set(topValue, "Top Performer");
    if (userValue !== undefined && userValue !== 0) importantPoints.set(userValue, email);

    const clustered: { value: number; label: string; radius: number }[] = [];
    const added = new Set<number>();
    let lastAdded: number | null = null;

    for (const [val, label] of importantPoints.entries()) {
      clustered.push({ value: val, label, radius: 7 });
      added.add(val);
    }

    values.forEach((val) => {
      if (added.has(val)) return;
      if (lastAdded === null || Math.abs(val - lastAdded) > threshold) {
        clustered.push({ value: val, label: "", radius: 3 });
        lastAdded = val;
      }
    });

    const finalData = clustered.sort((a, b) => a.value - b.value);

    return {
      labels: finalData.map((d) => d.label),
      datasets: [
        {
          label: selectedParam,
          data: finalData.map((d) => d.value),
          borderColor: "#83aac8",
          backgroundColor: "transparent",
          borderWidth: 2,
          fill: false,
          tension: 0.3,
          pointRadius: finalData.map((d) => d.radius),
          pointBackgroundColor: "#83aac8",
          pointBorderColor: "#83aac8",
          pointHoverRadius: 6,
        },
      ],
    };
  };

  const chartData = getChartData();

  const handleCopy = async () => {
    const chartElement = document.getElementById("selected-user-chart");
    if (!chartElement) return;

    const buttons = chartElement.querySelectorAll(".chart-buttons");
    buttons.forEach((btn) => ((btn as HTMLElement).style.display = "none"));

    const canvas = await html2canvas(chartElement);
    canvas.toBlob(async (blob) => {
      if (blob) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob }),
          ]);
        } catch {
          alert("Failed to copy chart.");
        }
      }
      buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
    });
  };

  const handleDownload = async () => {
    const chartElement = document.getElementById("selected-user-chart");
    if (!chartElement) return;

    const buttons = chartElement.querySelectorAll(".chart-buttons");
    buttons.forEach((btn) => ((btn as HTMLElement).style.display = "none"));

    const canvas = await html2canvas(chartElement);
    const link = document.createElement("a");
    link.download = `${email}-${selectedParam}.png`;
    link.href = canvas.toDataURL();
    link.click();

    buttons.forEach((btn) => ((btn as HTMLElement).style.display = "flex"));
  };

  if (!data || !userPerformance || !chartData) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p style={{ fontStyle: "italic", color: "#777" }}>Select a Parameter for Results...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        height: "51vh",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>
        Performance Curve:{" "}
        <span style={{ color: "#83aac8" }}>{selectedParam}</span>
      </h3>

      <div
        id="selected-user-chart"
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2%",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
        onMouseEnter={() => {
          const btns = document.querySelectorAll("#selected-user-chart .chart-buttons");
          btns.forEach((btn) => ((btn as HTMLElement).style.opacity = "1"));
        }}
        onMouseLeave={() => {
          const btns = document.querySelectorAll("#selected-user-chart .chart-buttons");
          btns.forEach((btn) => ((btn as HTMLElement).style.opacity = "0"));
        }}
      >
        {/* Chart Buttons */}
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
                title: {
                  display: true,
                  text: selectedParam,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SelectedUser;
