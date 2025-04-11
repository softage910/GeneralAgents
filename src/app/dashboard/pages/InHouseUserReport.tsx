"use client";

import { useEffect,useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, DocumentData } from "firebase/firestore";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const firebaseConfig = {
  apiKey: "AIzaSyATgZ3Ifa49BVy7Yo7TAoZdOmL-28t-gDA",
  authDomain: "generalagents-f8993.firebaseapp.com",
  databaseURL: "https://generalagents-f8993-default-rtdb.firebaseio.com",
  projectId: "generalagents-f8993",
  storageBucket: "generalagents-f8993.firebasestorage.app",
  messagingSenderId: "560678836746",
  appId: "1:560678836746:web:84cda659e267c9acea9df3",
  measurementId: "G-EG0PCF0M0J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function FirestoreDocument() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [data, setData] = useState<DocumentData | null>(null);
  const [userPerformance, setUserPerformance] = useState<DocumentData | null>(null);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [animateDropdown, setAnimateDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const popupTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    const storedUserEmail = sessionStorage.getItem("userEmail");
    if (storedUserEmail) setUserEmail(storedUserEmail);
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "Monthly_Data", "Highest_value_Parameters");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const fetchedData = docSnap.data();
        setData(fetchedData);
      }
  
      if (userEmail) {
        const userDocRef = doc(db, "Monthly_Data", "Monthly_User_Performance");
        const userDocSnap = await getDoc(userDocRef);
  
        if (userDocSnap.exists()) {
          const performanceData = userDocSnap.data()[userEmail];
          setUserPerformance(performanceData);
        }
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchData();
    }
  }, [userEmail]);

  useEffect(() => {
    if (data && userPerformance) {
      const validKeys = Object.keys(data).filter(
        key => Array.isArray(data[key]) && userPerformance[key] !== 0
      );
      if (validKeys.length > 0) {
        setSelectedKey(validKeys[0]);
      }
    }
  }, [data, userPerformance]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!data || !selectedKey || !userPerformance) return;

    const values = data[selectedKey];
    if (!Array.isArray(values)) return;

    const uniqueValues = [...new Set(values.filter((val: number) => val !== 0))].sort((a, b) => a - b);
    if (uniqueValues.length === 0) return;

    const topPerformer = uniqueValues[uniqueValues.length - 1];
    const myPerformance = userPerformance[selectedKey];

    if (myPerformance !== null && myPerformance !== undefined) {
      if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);

      const top10Threshold = topPerformer * 0.9;
      const bottom10Threshold = topPerformer * 0.1;

      setShowPopup(false);
      setPopupMessage("");
      if (myPerformance >= top10Threshold) {
        setPopupMessage("You are in the top 10% performers!");
        setShowPopup(true);
      } else if (myPerformance <= bottom10Threshold) {
        setPopupMessage("You are in the bottom 10% performers!");
        setShowPopup(true);
      }
    }
  }, [selectedKey, data, userPerformance]);


  const getChartData = () => {
    if (!data || !selectedKey || !Array.isArray(data[selectedKey])) return null;

    const uniqueValues = [...new Set(data[selectedKey].filter((val: number) => val !== 0))].sort((a, b) => a - b);
    if (uniqueValues.length === 0) return null;

    const topPerformer = uniqueValues[uniqueValues.length - 1];
    const myPerformance = userPerformance ? userPerformance[selectedKey] : null;

    const mean = uniqueValues.reduce((a, b) => a + b, 0) / uniqueValues.length;
    const sd = Math.sqrt(uniqueValues.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / uniqueValues.length);
    const threshold = sd * 0.4;

    const importantPointsMap = new Map<number, string>();
    importantPointsMap.set(topPerformer, "Top Performer");
    if (myPerformance !== null) importantPointsMap.set(myPerformance, "My Performance");

    const clusteredValues: number[] = [];
    const labels: string[] = [];
    const pointRadius: number[] = [];

    const addedPoints = new Set<number>();
    let lastAddedValue: number | null = null;

    for (const [value, label] of importantPointsMap.entries()) {
      clusteredValues.push(value);
      labels.push(label);
      pointRadius.push(7);
      addedPoints.add(value);
    }

    uniqueValues.forEach((value) => {
      if (addedPoints.has(value)) return;

      if (lastAddedValue === null || Math.abs(value - lastAddedValue) > threshold) {
        clusteredValues.push(value);
        labels.push(""); 
        pointRadius.push(3);
        lastAddedValue = value;
      }
    });

    const combined = clusteredValues.map((val, i) => ({
      value: val,
      label: labels[i],
      radius: pointRadius[i],
    })).sort((a, b) => a.value - b.value);

    return {
      labels: combined.map(d => d.label),
      datasets: [
        {
          label: selectedKey,
          data: combined.map(d => d.value),
          borderColor: "#83aac8",
          backgroundColor: "transparent",
          borderWidth: 2,
          fill: false,
          tension: 0,
          pointBackgroundColor: "#83aac8",
          pointBorderColor: "#83aac8",
          pointRadius: combined.map(d => d.radius),
          pointHoverRadius: 7,
        }
      ]
    };
  };

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const today = currentDate.toLocaleDateString();

  if (loading || !data || !userPerformance) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <p style={{ fontStyle: "italic", color: "#555" }}>Doing Sciences...</p>
      </div>
    );
  }

  const options = Object.keys(data).filter(
    key => Array.isArray(data[key]) && userPerformance[key] !== 0
  );

  
  return (
    <>
    {showPopup && (
      <div
      style={{
        position: "absolute",
        top: "9.5%",
        right: "1%",
        backgroundColor: popupMessage.includes('bottom 10%') ? '#e45a52' : '#83aac8ad',
        color: "white",
        padding: "13px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 999,
        fontWeight: 500,
        fontSize: "13px",
        opacity: showPopup ? 1 : 0,
        transform: showPopup ? "translateY(0px)" : "translateY(-20px)",
        transition: "opacity 1s ease, transform 1s ease",
        pointerEvents: showPopup ? "auto" : "none",
        visibility: popupMessage ? "visible" : "hidden",
      }}
    >
      {popupMessage}
    </div>
    
    )}
    <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "80vh", padding: "2%" }}>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px 0",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.2rem" }}>
          Report of {selectedKey} for {currentMonth} Till {today}
        </h1>

        <div
          ref={dropdownRef}
          style={{ position: "relative", minWidth: "200px" }}
        >
          <button
            onClick={() => {
              if (!dropdownOpen) {
                setShowDropdown(true);
                setTimeout(() => {
                  setDropdownOpen(true);
                  setAnimateDropdown(true);
                }, 10);
              } else {
                setAnimateDropdown(false);
                setTimeout(() => {
                  setDropdownOpen(false);
                  setShowDropdown(false);
                }, 200);
              }
            }}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              fontSize: "1rem",
              border: "1px solid #ccc",
              backgroundColor: "#f6f8fa",
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              color: "black",
            }}
          >
            {selectedKey} ▾
          </button>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                left: "50%",
                transform: animateDropdown
                  ? "translateX(-50%) translateY(0px)"
                  : "translateX(-50%) translateY(-10px)",
                opacity: animateDropdown ? 1 : 0,
                transition: "all 0.2s ease-in-out",
                backgroundColor: "#fff",
                border: "1px solid #d0d7de",
                borderRadius: "8px",
                boxShadow: "0 8px 24px rgba(66, 69, 73, 0.74)",
                zIndex: 1000,
                color: "black",
                minWidth: "200px",
                pointerEvents: animateDropdown ? "auto" : "none",
              }}
            >
              {options.map((option) => (
                <DropdownItem
                  key={option}
                  label={option}
                  selected={selectedKey === option}
                  onClick={() => {
                    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
                    setShowPopup(false);
                    setPopupMessage("");
                    setSelectedKey(option);
                    setAnimateDropdown(false);
                    setTimeout(() => {
                      setDropdownOpen(false);
                      setShowDropdown(false);
                    }, 200);
                  }}
                />
              ))}
            </div>
          )}
        </div>
        </div> 
      {selectedKey && getChartData() && (
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5%",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Line
            data={getChartData()!}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Performance Chart" },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      )}

      
    </div>
    </>
  );
  
}

// Dropdown item component
function DropdownItem({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "8px 12px",
        cursor: "pointer",
        backgroundColor: hover
          ? "rgb(33, 33, 33)"
          : selected
          ? "#f0f3f6"
          : "#fff",
        color: hover ? "white" : "black",
        fontWeight: selected ? 600 : 400,
        transition: "all 0.8s ease",
        borderRadius:"8px"
      }}
    >
      {label}
    </div>
  );
}