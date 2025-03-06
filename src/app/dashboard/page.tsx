"use client";
import { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseconfig";
import Image from "next/image";
import Logo1 from "../../../public/Images/Logo-removebg-preview.png";
import ComingSoon from "./pages/ComingSoon";
import Fluxe from "./pages/Fluxe";
import Engine from "./pages/Engine";
import DataCreation from "./pages/DataCreationGuidelines";
import ToolCoverage from "./pages/ToolCoverage";
import './pages/MobileScreen.css';
import UserDashboard from "./pages/UserDashboard";
import ChatBot from "../components/ChatBot";
import ReadingMaterial from "./pages/ReadingMaterial";
import BasicsPrompt from "./pages/BasicsOfPrompting";

type ModuleInfo = {
  day: string;
  module: string;
  component: React.ComponentType;
};

export default function Dashboard() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter(); // Correct way to use router in App Router
  const [isOpen, setIsOpen] = useState(false);


  const dayModules: { [key: string]: string[] } = {
    "DataList": ["Introduction To Fluxe", "Introduction To Engine", "Data Creation Guidelines","Prompting Basics","Extensive Tool Coverage And Function Mapper","Samples Of Clean-Optimal Action Recordings","Sample Tasks To Practice On","Current Eval Performance","Suggested Reading Materials","Glossary"],
  };

  const moduleMap: { [key: string]: ModuleInfo } = {
    "DataList - Introduction To Fluxe": { day: "DataList", module: "Introduction To Fluxe", component: Fluxe},
    "DataList - Introduction To Engine": { day: "DataList", module: "Introduction To Engine", component: Engine},
    "DataList - Data Creation Guidelines": { day: "DataList", module: "Data Creation Guidelines", component: DataCreation},
    "DataList - Prompting Basics": { day: "DataList", module: "Prompting Basics", component: BasicsPrompt},
    "DataList - Extensive Tool Coverage And Function Mapper": { day: "DataList", module: "Extensive Tool Coverage And Function Mapper", component: ToolCoverage},
    "DataList - Samples Of Clean-Optimal Action Recordings": { day: "DataList", module: "Sample Of Clean-Optimal Action Recordings", component: ComingSoon},
    "DataList - Sample Tasks To Practice On": { day: "DataList", module: "Sample Tasks To Practice", component: ComingSoon},
    "DataList - Current Eval Performance": { day: "DataList", module: "Current Eval Performance", component: ComingSoon},
    "DataList - Suggested Reading Materials": { day: "DataList", module: "Suggested Reading Materials", component: ReadingMaterial},
    "DataList - Glossary": { day: "DataList", module: "Glossary", component: ComingSoon}
  };

//   useEffect(() => {
//     const sessionExpireTime = sessionStorage.getItem("sessionExpireTime");
//     const currentTime = new Date().getTime();

//     const storedUserName = sessionStorage.getItem("userName");
//         if (storedUserName) {
//             setUserName(storedUserName);
//         }
  
//     if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
//       handleLogout();
//     } else {
//       const remainingTime = Number(sessionExpireTime) - currentTime;
//       setTimeout(handleLogout, remainingTime);
//     }

//     setLoading(false);
//   }, []);


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

    // Retrieve the last selected module from localStorage
    const storedModule = localStorage.getItem("selectedModule");
    if (storedModule) {
        setSelectedModule(storedModule);
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
};

const setSelectedModuleHandler = (module: string) => {
    setSelectedModule(module);
    localStorage.setItem("selectedModule", module); // Store in localStorage
    setIsOpen(false); // Close sidebar on selecting a module
};

  return (

    <div className="Dashboard-Section">
            {/* Hamburger Button */}

            <button className="hamburger" onClick={toggleSidebar}>
                ☰
            </button>

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <Image src={Logo1} alt="Logo" width={180} height={0} />
                </div>

                <ul className="sidebar-links">
                    <li className={selectedModule === "Dashboard" ? "active" : ""}>
                        <a href="#" onClick={() => setSelectedModule("Dashboard")}>Onboarding</a>
                    </li>

                    <hr />

                    {Object.keys(dayModules).map((day, i) => (
                        <li key={i}>
                            <ul>
                                {dayModules[day].map((module: string, index: number) => (
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

      
{/* Dynamically Adjusting Inner-Section */}
<div className={`Inner-Section ${isOpen ? "expanded" : ""}`}>
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
    <ChatBot />
    </div>
  );
}