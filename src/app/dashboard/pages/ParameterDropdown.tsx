"use client";

import { useEffect, useRef, useState } from "react";

export default function ParameterDropdown({
  allData,
  selectedEmail,
  selectedParam,
  setSelectedParam,
}: {
  allData: Record<string, Record<string, number>>;
  selectedEmail: string;
  selectedParam: string;
  setSelectedParam: (param: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState<string>(selectedParam || "");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedParam");
    if (stored) {
      setSearchTerm(stored);
      setSelectedParam(stored);
    }
  }, [setSelectedParam]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const sorted = (list: string[]) => [...list].sort((a, b) => a.localeCompare(b));

  const getDynamicParams = (): string[] => {
    if (!allData || Object.keys(allData).length === 0) return [];

    if (selectedEmail && allData[selectedEmail]) {
      const userData = allData[selectedEmail];
      const nonZeroParams = Object.entries(userData)
        .filter(([, val]) => val > 0)
        .map(([key]) => key);

      if (
        selectedParam &&
        (!userData[selectedParam] || userData[selectedParam] === 0)
      ) {
        return [`${selectedParam} (User not working on this)`];
      }

      return sorted(nonZeroParams);
    }

    const paramSet = new Set<string>();
    Object.values(allData).forEach(userData => {
      if (userData) {
        Object.entries(userData).forEach(([param, val]) => {
          if (val > 0) paramSet.add(param);
        });
      }
    });

    return sorted(Array.from(paramSet));
  };

  const handleSelect = (param: string) => {
    setSelectedParam(param);
    setSearchTerm(param);
    sessionStorage.setItem("selectedParam", param);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedParam("");
    sessionStorage.removeItem("selectedParam");
    setIsOpen(false);
  };

  const filtered = getDynamicParams().filter((param) =>
    param.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paramUnavailable =
    selectedEmail &&
    selectedParam &&
    allData[selectedEmail] &&
    (!allData[selectedEmail][selectedParam] || allData[selectedEmail][selectedParam] === 0);

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "220px" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#212121",
          borderRadius: "8px",
          padding: "10px",
          cursor: "text",
          color: "white",
        }}
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            position: "absolute",
            top: searchTerm || isFocused ? "9px" : "50%",
            fontSize: searchTerm || isFocused ? "11px" : "14px",
            color: "white",
            transform: "translateY(-50%)",
            transition: "all 0.1s ease",
            pointerEvents: "none",
          }}
        >
          Search by parameter
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "14px",
            paddingTop: searchTerm ? "3px" : "0px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        />

        {searchTerm && isHovered && (
          <div
            onClick={handleClear}
            style={{
              marginLeft: "8px",
              cursor: "pointer",
              color: "#888",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            ×
          </div>
        )}

        <div
          style={{
            marginLeft: "8px",
            fontSize: "12px",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </div>
      </div>

      {isOpen && filtered.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            backgroundColor: "rgb(33,33,33)",
            padding: "6px",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.69)",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filtered.map((param) => (
            <div
              key={param}
              onClick={() => handleSelect(param)}
              onMouseEnter={() => setHoveredItem(param)}
              style={{
                padding: "8px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                backgroundColor:
                  hoveredItem === param ? "#303030" : "rgb(33,33,33)",
                color: "white",
                borderRadius: "8px",
                fontSize: "13px",
                textAlign: "left",
              }}
            >
              {param}
            </div>
          ))}
        </div>
      )}

      {paramUnavailable && (
        <div style={{ fontSize: "12px", color: "orangered", marginTop: "4px" }}>
          This user is not working on this parameter.
        </div>
      )}
    </div>
  );
}
