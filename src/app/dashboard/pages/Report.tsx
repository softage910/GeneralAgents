"use client";
import { useEffect, useState } from "react";
import AdminReport from "./AdminReport";
import InHouseUserReport from "./InHouseUserReport";
import DomainExpertReport from "./DomainExpertReport";

export default function Report() {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const storedUserType = sessionStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType); 
    }
  }, []);

  return (
    <div className="ProgressbarContent">
      {userType === "ADMIN" && <AdminReport />}
      {userType === "Domain Expert" && <DomainExpertReport />}
      {userType === "In-House Team" && <InHouseUserReport />}
    </div>
  );
}