"use client";
import { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseconfig";
import Image from "next/image";
import Logo from "../auth/Logo.png";
import ComingSoon from "./pages/ComingSoon";
import Fluxe from "./pages/Fluxe";
import Engine from "./pages/Engine";
import DataCreation from "./pages/DataCreationGuidelines";
import './pages/MobileScreen.css';
import UserDashboard from "./pages/UserDashboard";

type ModuleInfo = {
  day: string;
  module: string;
  component: React.ComponentType;
};

export default function Dashboard() {
  const [userDetails, setUserDetails] = useState<{ name: string; uid: string } | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter(); // Correct way to use router in App Router


  const dayModules: { [key: string]: string[] } = {
    "DataList": ["Fluxe", "Engine", "Data Creation Guidelines","Practice Tasks","Demo Recordings","Suggested Reference Materials"],
  };

  const moduleMap: { [key: string]: ModuleInfo } = {
    "DataList - Fluxe": { day: "DataList", module: "Fluxe", component: Fluxe},
    "DataList - Engine": { day: "DataList", module: "Engine", component: Engine},
    "DataList - Data Creation Guidelines": { day: "DataList", module: "Data Creation Guidelines", component: DataCreation},
    "DataList - Practice Tasks": { day: "DataList", module: "Practice Tasks", component: ComingSoon},
    "DataList - Demo Recordings": { day: "DataList", module: "Demo Recordings", component: ComingSoon},
    "DataList - Suggested Reference Materials": { day: "DataList", module: "Suggested Reference Materials", component: ComingSoon},
  };

  useEffect(() => {
    const sessionExpireTime = sessionStorage.getItem("sessionExpireTime");
    const currentTime = new Date().getTime();

    const storedUserName = sessionStorage.getItem("userName");
        if (storedUserName) {
            setUserName(storedUserName);
        }
  
    if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
      handleLogout();
    } else {
      const remainingTime = Number(sessionExpireTime) - currentTime;
      setTimeout(handleLogout, remainingTime);
    }

    setLoading(false);
  }, []);
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.clear();
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const setSelectedModuleHandler = (key: string) => {
    setSelectedModule(key);
  };

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (selectedModule && moduleMap[selectedModule]) {
      const SelectedComponent = moduleMap[selectedModule].component;
      return <SelectedComponent />;
    }
    return <UserDashboard />;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div className="Dashboard-Section">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Image src={Logo} alt="Logo" width={250} height={50} />
        </div>
        <ul className="sidebar-links">
        <h4>
            <span>Main Menu</span>
          </h4>
          <li className={selectedModule === "Dashboard" ? "active" : ""}>
            <a href="#" onClick={() => setSelectedModule("Dashboard")}>
              <span className="material-symbols-outlined"> dashboard </span>Dashboard
            </a>
          </li>
          <h4>
            <span>Training / Assessment</span>
          </h4>
          {Object.keys(dayModules).map((day, i) => (
            <li key={i}>
              <ul>
                {dayModules[day].map((module, index) => (
                  <li key={index} className={selectedModule === `${day} - ${module}` ? "active" : ""}>
                    <a href="#" onClick={() => setSelectedModuleHandler(`${day} - ${module}`)}>
                      {module}
                    </a>
                  </li>
                ))}
              </ul>      
            </li>
          ))}
        </ul>
      </aside>
      <div className="Inner-Section">
        <div className="Dashboard-Navbar">
          <div className="user-account">
            <div className="user-profile">
              <div className="user-detail">
              <h3>{userName ? userName : "User"}</h3>
              </div>
              <div className="Logout-button">
                <a href="#" onClick={handleLogout}>
                  <span className="material-symbols-outlined"> logout </span>Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="InnerDashboard">{renderContent()}</div>
      </div>
    </div>
  );
}
