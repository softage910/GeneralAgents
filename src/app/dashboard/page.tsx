"use client";
import { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseconfig";
import Image from "next/image";
import Logo1 from "../../../public/Images/Logo-removebg-preview.png";
import Fluxe from "./pages/Fluxe";
import Engine from "./pages/Engine";
import DataCreation from "./pages/DataCreationGuidelines";
import ToolCoverage from "./pages/ToolCoverage";
import './pages/MobileScreen.css';
import UserDashboard from "./pages/UserDashboard";
import ChatBot from "../components/ChatBot";
import ReadingMaterial from "./pages/ReadingMaterial";
import BasicsPrompt from "./pages/BasicsOfPrompting";
import DataPopulation from "./pages/DataPopulation";
import PromptsInstructions from "./pages/PromptsInstructions";
import FinalCheck from "./pages/FinalCheck";
import Admin from "./pages/Admin";
import Glossary from "./pages/Glossary";

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
  const [userType, setUserType] = useState<string | null>(null);


  const dayModules: { [key: string]: string[] } = {
    "DataList": ["ADMIN","Onboarding","Introduction To Fluxe", "Introduction To Engine", "Data Creation Guidelines","Importance of Data Population and Diversity","Prompts: Instructions and Annotations","Prompting Basics","Extensive Tool Coverage And Function Mapper","Suggested Reading Materials","Final Checklist","Glossary"],
  };
  
  const moduleMap: { [key: string]: ModuleInfo & { customName: string } } = {
    "DataList - ADMIN": { day: "DataList", module: "ADMIN", component: Admin, customName: "ADMIN" },
    "DataList - Onboarding": { day: "DataList", module: "Onboarding", component: UserDashboard, customName: "Onboarding" },
    "DataList - Introduction To Fluxe": { day: "DataList", module: "Introduction To Fluxe", component: Fluxe, customName: "Fluxe" },
    "DataList - Introduction To Engine": { day: "DataList", module: "Introduction To Engine", component: Engine, customName: "Engine" },
    "DataList - Data Creation Guidelines": { day: "DataList", module: "Data Creation Guidelines", component: DataCreation, customName: "Data_Guidelines" },
    "DataList - Importance of Data Population and Diversity": { day: "DataList", module: "Importance of Data Population and Diversity", component: DataPopulation, customName: "Data_Population" },
    "DataList - Prompts: Instructions and Annotations": { day: "DataList", module: "Prompts: Instructions and Annotations", component: PromptsInstructions, customName: "prompt_inst" },
    "DataList - Prompting Basics": { day: "DataList", module: "Prompting Basics", component: BasicsPrompt, customName: "Prompting_basics" },
    "DataList - Extensive Tool Coverage And Function Mapper": { day: "DataList", module: "Extensive Tool Coverage And Function Mapper", component: ToolCoverage, customName: "Function_Mapper" },
    "DataList - Suggested Reading Materials": { day: "DataList", module: "Suggested Reading Materials", component: ReadingMaterial, customName: "Suggested_Reading" },
    "DataList - Final Checklist": { day: "DataList", module: "Final Checklist", component: FinalCheck, customName: "Final-Checklist" },
    "DataList - Glossary": { day: "DataList", module: "Glossary", component: Glossary, customName: "Glossary" },
};




useEffect(() => {
    const sessionExpireTime = sessionStorage.getItem("sessionExpireTime");
    const currentTime = new Date().getTime();
    const storedUserName = sessionStorage.getItem("userName");
    const storedUserType = sessionStorage.getItem("userType"); // Retrieve user type

    if (storedUserType){
        setUserType(storedUserType);
    } 


    if (storedUserName) {
        setUserName(storedUserName);
    }

    if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
        handleLogout();
    } else {
        const remainingTime = Number(sessionExpireTime) - currentTime;
        setTimeout(handleLogout, remainingTime);
    }

    // Retrieve module name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const moduleNameFromUrl = urlParams.get("module");

    if (moduleNameFromUrl) {
        // Find the corresponding module key in moduleMap
        const foundModuleKey = Object.keys(moduleMap).find(
            key => moduleMap[key].module === moduleNameFromUrl
        );

        if (foundModuleKey) {
            setSelectedModule(foundModuleKey);
        }
    } else {
        // Fallback to localStorage if URL does not have a module
        const storedModule = localStorage.getItem("selectedModule");
        if (storedModule) {
            setSelectedModule(storedModule);
        }
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
    // return <UserDashboard />;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
};

const setSelectedModuleHandler = (moduleKey: string) => {
    const moduleInfo = moduleMap[moduleKey];

    if (moduleInfo) {
        setSelectedModule(moduleKey);
        localStorage.setItem("selectedModule", moduleKey); // Store selection
        router.push(`/dashboard?${encodeURIComponent(moduleInfo.customName)}`); // Push only the module name
        setIsOpen(false); // Close sidebar
    }
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

                <hr/>

                <ul className="sidebar-links">
          {Object.keys(dayModules).map((day, i) => (
            <li key={i}>
              <ul>
                {dayModules[day]
                  .filter((module) => userType === "ADMIN" || module !== "ADMIN") // Hide "ADMIN" for normal users
                  .map((module, index) => (
                    <li key={index}>
                      <a href="#" onClick={() => setSelectedModule(`${day} - ${module}`)}>
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
        <div className="InnerDashboard">{renderContent()}

                {/* Button for moving to the next module */}
{/* Button for moving to the next module */}
{selectedModule && moduleMap[selectedModule] && (() => {
    const modules = Object.keys(moduleMap);
    const currentIndex = modules.indexOf(selectedModule);
    const prevModule = currentIndex > 1 ? modules[currentIndex - 1] : null;
    const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

    return (selectedModule !== "DataList - Onboarding") && (selectedModule !== "DataList - ADMIN")  ? ( // 🚀 Hides Next Button for Onboarding
        <div className="NextPrev-btn">
            {prevModule && (
                <button
                    onClick={() => setSelectedModuleHandler(prevModule)}
                    className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                >
                    ← {moduleMap[prevModule].module}
                </button>
            )}
            {nextModule && (
                <button
                    onClick={() => setSelectedModuleHandler(nextModule)}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    {moduleMap[nextModule].module} →   
                </button>  
            )}  
        </div>   
    ) : null;
})()}

        </div>
    </div>
    <ChatBot />
    </div>
  );
}