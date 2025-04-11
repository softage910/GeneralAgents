"use client";

// @ts-expect-error: html2pdf types not available
import html2pdf from "html2pdf.js";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

export default function GenerateReportButton({
  selectedParam,
  allData,
}: {
  selectedParam: string;
  allData: Record<string, Record<string, number>>;
}) {
  const generateReport = async () => {
    const wrapper = document.createElement("div");
    wrapper.style.padding = "1.5rem";
    wrapper.style.fontFamily = "Arial, sans-serif";
    wrapper.style.color = "#000";

    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const day = today.getDate() - 1;

    wrapper.innerHTML += `
      <h1 style="text-align:center;margin-bottom:20px;font-size:18px">
        Report of <span style="color:#83aac8">${selectedParam}</span> for ${month} till ${day}
      </h1>
    `;

    const tiers: ("high" | "mid" | "low")[] = ["high", "mid", "low"];

    for (const tier of tiers) {
      const users = getTierUsers(tier, allData, selectedParam);
      const validUsers = users.filter(
        (u) => typeof u.value === "number" && !isNaN(u.value)
      );

      if (!validUsers.length) continue;

      const color = tier === "low" ? "red" : tier === "mid" ? "orange" : "green";

      const tierBlock = document.createElement("div");
      tierBlock.style.pageBreakInside = "avoid";
      tierBlock.style.marginBottom = "2rem";

      const chartHeading = document.createElement("h2");
      chartHeading.innerText = `${tier.toUpperCase()} Tier Category`;
      chartHeading.style.color = color;
      chartHeading.style.margin = "1.5rem 0 1rem";
      chartHeading.style.fontSize = "15px";
      tierBlock.appendChild(chartHeading);

      const chartCanvas = document.createElement("canvas");
      chartCanvas.width = 800;
      chartCanvas.height = 300;
      const ctx = chartCanvas.getContext("2d");
      if (!ctx) continue;

      const sortedChart = [...validUsers].sort((a, b) => a.value - b.value);

      new ChartJS(ctx, {
        type: "line",
        data: {
          labels: sortedChart.map((u) => u.email),
          datasets: [
            {
              label: selectedParam,
              data: sortedChart.map((u) => u.value),
              borderColor: color,
              backgroundColor: "transparent",
              fill: false,
              tension: 0.3,
              pointRadius: 3,
              pointHoverRadius: 4,
            },
          ],
        },
        options: {
          responsive: false,
          animation: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true },
            x: {
              ticks: { maxRotation: 90, minRotation: 45 },
            },
          },
        },
      });

      await new Promise((res) => setTimeout(res, 200));
      const img = document.createElement("img");
      img.src = chartCanvas.toDataURL("image/png");
      img.style.width = "100%";
      img.style.margin = "1rem 0";
      tierBlock.appendChild(img);

      const sortedTable = [...validUsers].sort((a, b) => b.value - a.value);

      const table = document.createElement("table");
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";
      table.style.fontSize = "11px";

      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr style="background:#eee">
          <th style="border:1px solid #ccc;padding:6px;text-align:left">S.No</th>
          <th style="border:1px solid #ccc;padding:6px;text-align:left">Email</th>
          <th style="border:1px solid #ccc;padding:6px;text-align:left">Parameter</th>
          <th style="border:1px solid #ccc;padding:6px;text-align:left">Count</th>
        </tr>
      `;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      sortedTable.forEach((user, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td style="border:1px solid #ccc;padding:6px">${i + 1}</td>
          <td style="border:1px solid #ccc;padding:6px">${user.email}</td>
          <td style="border:1px solid #ccc;padding:6px">${selectedParam}</td>
          <td style="border:1px solid #ccc;padding:6px">${user.value}</td>
        `;
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      tierBlock.appendChild(table);
      wrapper.appendChild(tierBlock);
    }

    html2pdf()
      .set({
        margin: 0.4,
        filename: `Report-${selectedParam}.pdf`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(wrapper)
      .save();
  };

  const getTierUsers = (
    tier: "low" | "mid" | "high",
    allData: Record<string, Record<string, number>>,
    param: string
  ): { email: string; value: number }[] => {
    const users = Object.entries(allData)
      .filter(([, vals]) => vals[param] > 0)
      .map(([email, vals]) => ({ email, value: vals[param] }));

    if (!users.length) return [];

    const min = Math.min(...users.map((u) => u.value));
    const max = Math.max(...users.map((u) => u.value));

    if (min === max) return tier === "high" ? users : [];

    const normalize = (val: number) => ((val - min) / (max - min)) * 100;

    return users
      .map((u) => ({ ...u, norm: normalize(u.value) }))
      .filter((u) =>
        tier === "low"
          ? u.norm < 33
          : tier === "mid"
          ? u.norm >= 33 && u.norm < 66
          : u.norm >= 66
      );
  };

  return (
    <button
      onClick={generateReport}
      style={{
        backgroundColor: "#212121",
        color: "white",
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      Generate Report
    </button>
  );
}
