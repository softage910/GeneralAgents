"use client";

// @ts-expect-error: html2pdf types not available
import html2pdf from "html2pdf.js";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function GenerateUserReportButton({
  selectedEmail,
  allData,
}: {
  selectedEmail: string;
  allData: Record<string, Record<string, number>>;
}) {
  const generateReport = async () => {
    const userData = allData[selectedEmail];
    if (!userData) return;

    const wrapper = document.createElement("div");
    wrapper.style.fontFamily = "Arial, sans-serif";
    wrapper.style.color = "#000";
    wrapper.style.width = "100%";

    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const day = today.getDate() - 1;

    const title = document.createElement("h1");
    title.innerHTML = `Report of <span style="color:#83aac8">${selectedEmail}</span> for ${month} till ${day}`;
    title.style.textAlign = "center";
    title.style.marginBottom = "2rem";
    title.style.fontSize = "18px";
    wrapper.appendChild(title);

    let page = document.createElement("div");
    let paramCount = 0;

    for (const [param, userValue] of Object.entries(userData)) {
      if (typeof userValue !== "number" || userValue <= 0 || isNaN(userValue)) continue;

      const allValues = Object.entries(allData)
        .map(([email, values]) => ({ email, value: values[param] }))
        .filter((v) => typeof v.value === "number" && v.value > 0 && !isNaN(v.value));

      const sorted = [...allValues].sort((a, b) => b.value - a.value);

      // Dense ranking
      const rankMap: Record<string, number> = {};
      let rankCounter = 1;
      let sameScoreCount = 0;
      let lastValue: number | null = null;

      for (const user of sorted) {
        if (user.value === lastValue) {
          sameScoreCount++;
        } else {
          rankCounter += sameScoreCount;
          sameScoreCount = 1;
        }
        rankMap[user.email] = rankCounter;
        lastValue = user.value;
      }

      const rank = rankMap[selectedEmail];

      const min = Math.min(...sorted.map((u) => u.value));
      const max = Math.max(...sorted.map((u) => u.value));
      const normalize = (val: number) => (min === max ? 100 : ((val - min) / (max - min)) * 100);
      const norm = normalize(userValue);
      const tier = norm < 33 ? "Low" : norm < 66 ? "Mid" : "High";
      const topValue = sorted[0]?.value || 0;

      const section = document.createElement("div");
      section.style.marginBottom = "2rem";

      const heading = document.createElement("h2");
      heading.textContent = `Parameter: ${param}`;
      heading.style.fontSize = "15px";
      section.appendChild(heading);

      const table = document.createElement("table");
      table.style.width = "100%";
      table.style.borderCollapse = "collapse";
      table.style.fontSize = "11px";
      table.style.marginBottom = "1rem";
      table.style.marginTop = "1rem";
      table.innerHTML = `
        <thead>
          <tr style="background:#eee">
            <th style="border:1px solid #ccc;padding:6px">Parameter</th>
            <th style="border:1px solid #ccc;padding:6px">Tier</th>
            <th style="border:1px solid #ccc;padding:6px">Count</th>
            <th style="border:1px solid #ccc;padding:6px">Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #ccc;padding:6px">${param}</td>
            <td style="border:1px solid #ccc;padding:6px">${tier}</td>
            <td style="border:1px solid #ccc;padding:6px">${userValue}</td>
            <td style="border:1px solid #ccc;padding:6px">${rank}</td>
          </tr>
        </tbody>
      `;
      section.appendChild(table);

      const rawValues = [...new Set(sorted.map((u) => u.value))]
        .filter((v) => typeof v === "number" && !isNaN(v))
        .sort((a, b) => a - b);

      const mean = rawValues.reduce((a, b) => a + b, 0) / rawValues.length;
      const stdDev = Math.sqrt(
        rawValues.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / rawValues.length
      );
      const threshold = stdDev * 0.4;

      const clustered: { value: number; label: string; radius: number }[] = [];
      const important = new Map<number, string>();
      important.set(topValue, "Top Performer");
      if (userValue > 0) important.set(userValue, selectedEmail);

      const added = new Set<number>();
      let lastAdded: number | null = null;

      for (const [val, label] of important.entries()) {
        clustered.push({ value: val, label, radius: 7 });
        added.add(val);
      }

      rawValues.forEach((val) => {
        if (added.has(val)) return;
        if (lastAdded === null || Math.abs(val - lastAdded) > threshold) {
          clustered.push({ value: val, label: "", radius: 3 });
          lastAdded = val;
        }
      });

      const finalData = clustered
        .filter((d) => typeof d.value === "number" && !isNaN(d.value))
        .sort((a, b) => a.value - b.value);

      if (!finalData.length) continue;

      const canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 247;
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;

      new ChartJS(ctx, {
        type: "line",
        data: {
          labels: finalData.map((d) => d.label),
          datasets: [
            {
              label: param,
              data: finalData.map((d) => d.value),
              borderColor: "#83aac8",
              backgroundColor: "transparent",
              fill: false,
              tension: 0, // 🔒 Prevent curve (cp1x error)
              pointRadius: finalData.map((d) => d.radius),
              pointBackgroundColor: "#83aac8",
              pointBorderColor: "#83aac8",
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: false,
          animation: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: param },
            },
          },
        },
      });

      await new Promise((res) => setTimeout(res, 200));
      const img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      img.style.width = "100%";
      img.style.marginBottom = "1rem";
      section.appendChild(img);

      page.appendChild(section);
      paramCount++;

      if (paramCount === 2) {
        const breakPage = document.createElement("div");
        breakPage.classList.add("page-block");
        breakPage.appendChild(page);
        breakPage.style.pageBreakAfter = "always";

        wrapper.appendChild(breakPage);
        paramCount = 0;
        page = document.createElement("div");
        page.style.display = "flex";
        page.style.flexDirection = "column";
        page.style.gap = "2rem";
      }
    }

    if (page.childNodes.length > 0) {
      wrapper.appendChild(page);
    }

    html2pdf()
      .set({
        margin: 0.3,
        filename: `User-Report-${selectedEmail}.pdf`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(wrapper)
      .save();
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
