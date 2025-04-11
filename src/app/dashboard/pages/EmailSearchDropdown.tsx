"use client";
import { useEffect, useState,useRef } from "react";
export default function EmailSearchDropdown({
  emails,
  selectedEmail,
  setSelectedEmail,
}: {
  emails: string[];
  selectedEmail: string;
  setSelectedEmail: (email: string) => void;
}) {
  const sortedEmails = [...emails].sort((a, b) => a.localeCompare(b));
  const [searchTerm, setSearchTerm] = useState(selectedEmail || "");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedEmail");
    if (stored) setSearchTerm(stored);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (email: string) => {
    setSelectedEmail(email);
    setSearchTerm(email);
    sessionStorage.setItem("selectedEmail", email);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedEmail("");
    sessionStorage.removeItem("selectedEmail");
    setIsOpen(false);
  };

  const filtered = sortedEmails.filter(e =>
    e.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          height: "100%",
        }}
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Label */}
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
          Search by email
        </div>

        {/* Search Input */}
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

        {/* Clear (X) Button */}
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

        {/* Dropdown Arrow */}
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

      {/* Dropdown List */}
      {isOpen && filtered.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            backgroundColor: "rgb(33,33,33)",
            padding:"6px",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.69)",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filtered.map((email) => (
            <div
              key={email}
              onClick={() => handleSelect(email)}
              onMouseEnter={() => setHoveredItem(email)}
              style={{
                padding: "8px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                backgroundColor: hoveredItem === email ? "#303030" : "rgb(33,33,33)",
                color:  "white",
                borderRadius: "8px",
                fontSize:"13px",
                textAlign:"left"
              }}
            >
              {email}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}