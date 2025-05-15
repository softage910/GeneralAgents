// "use client";
// import { useEffect, useState } from "react";
// import "./page.css";
// import { useRouter } from "next/navigation";
// import { signOut } from "firebase/auth";
// import { auth } from "../../lib/firebaseconfig";
// import Image from "next/image";
// import Logo1 from "../../../public/Images/Logo-removebg-preview.png";
// import Fluxe from "./pages/Fluxe";
// import Engine from "./pages/Engine";
// import DataCreation from "./pages/DataCreationGuidelines";
// import ToolCoverage from "./pages/ToolCoverage";
// import './pages/MobileScreen.css';
// import UserDashboard from "./pages/UserDashboard";
// import ChatBot from "../components/ChatBot";
// import ReadingMaterial from "./pages/ReadingMaterial";
// import BasicsPrompt from "./pages/BasicsOfPrompting";
// import DataPopulation from "./pages/DataPopulation";
// import PromptsInstructions from "./pages/PromptsInstructions";
// import FinalCheck from "./pages/FinalCheck";
// import Admin from "./pages/Admin";
// import Glossary from "./pages/Glossary";
// import Report from './pages/Report';

// type ModuleInfo = {
//   day: string;
//   module: string;
//   component: React.ComponentType;
//   customName: string;
// };

// export default function Dashboard() {
//   const [selectedModule, setSelectedModule] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [userName, setUserName] = useState<string | null>(null);
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [userType, setUserType] = useState<string | null>(null);

//   let baseModules = [
//     "Onboarding", "Report", "Introduction To Fluxe", "Introduction To Engine", 
//     "Data Creation Guidelines", "Importance of Data Population and Diversity", 
//     "Prompts: Instructions and Annotations", "Prompting Basics",
//     "Extensive Tool Coverage And Function Mapper", "Suggested Reading Materials", 
//     "Final Checklist", "Glossary"
//   ];

//   if (userType === "In-House Team") {
//     baseModules = baseModules.filter(module => !["Onboarding", "Extensive Tool Coverage And Function Mapper","Suggested Reading Materials"].includes(module));
//   }
  
//   if (userType === "Domain Expert") {
//     baseModules = baseModules.filter(module => !["Report", "Extensive Tool Coverage And Function Mapper","Suggested Reading Materials"].includes(module));
//   }
  

//   const dayModules: { [key: string]: string[] } = {
//     "DataList": userType === "ADMIN" ? ["ADMIN", ...baseModules] : baseModules,
//   };

//   const moduleMap: { [key: string]: ModuleInfo } = Object.fromEntries(
//     dayModules["DataList"].map((module) => [
//       `DataList - ${module}`,
//       {
//         day: "DataList",
//         module,
//         component: ({
//             "ADMIN": Admin,
//             "Onboarding": UserDashboard,
//             "Report": Report,
//             "Introduction To Fluxe": Fluxe,
//             "Introduction To Engine": Engine,
//             "Data Creation Guidelines": DataCreation,
//             "Importance of Data Population and Diversity": DataPopulation,
//             "Prompts: Instructions and Annotations": PromptsInstructions,
//             "Prompting Basics": BasicsPrompt,
//             "Extensive Tool Coverage And Function Mapper": ToolCoverage,
//             "Suggested Reading Materials": ReadingMaterial,
//             "Final Checklist": FinalCheck,
//             "Glossary": Glossary,
//           }[module] as React.ComponentType) || undefined,
          
//         customName: module.replace(/\s+/g, "_")
//       }
//     ])
//   );

//   useEffect(() => {
//     const sessionExpireTime = sessionStorage.getItem("sessionExpireTime");
//     const currentTime = new Date().getTime();
//     const storedUserName = sessionStorage.getItem("userName");
//     const storedUserType = sessionStorage.getItem("userType");

//     if (storedUserType) setUserType(storedUserType);
//     if (storedUserName) setUserName(storedUserName);
//     if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
//       handleLogout();
//     } else {
//       setTimeout(handleLogout, Number(sessionExpireTime) - currentTime);
//     }

//     const urlParams = new URLSearchParams(window.location.search);
//     const moduleNameFromUrl = urlParams.get("module");
//     if (moduleNameFromUrl) {
//       const foundModuleKey = Object.keys(moduleMap).find(
//         key => moduleMap[key].module === moduleNameFromUrl
//       );
//       if (foundModuleKey) setSelectedModule(foundModuleKey);
//     } else {
//       const storedModule = localStorage.getItem("selectedModule");
//       if (storedModule) setSelectedModule(storedModule);
//     }
//     setLoading(false);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       sessionStorage.clear();
//       router.push("/");
//       setTimeout(() => window.location.reload(), 100);
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   const renderContent = () => {
//     if (loading) return <div>Loading...</div>;
//     if (selectedModule && moduleMap[selectedModule]) {
//       const SelectedComponent = moduleMap[selectedModule].component;
//       return <SelectedComponent />;
//     }
//   };

//   const setSelectedModuleHandler = (moduleKey: string) => {
//     if (moduleMap[moduleKey]) {
//       setSelectedModule(moduleKey);
//       localStorage.setItem("selectedModule", moduleKey);
//       router.push(`/dashboard?module=${encodeURIComponent(moduleMap[moduleKey].customName)}`);
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className="Dashboard-Section">
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
//       <aside className={`sidebar ${isOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <Image src={Logo1} alt="Logo" width={180} height={0} />
//         </div>
//         <hr/>
//         <ul className="sidebar-links">
//           {dayModules["DataList"].map((module, index) => (
//             <li key={index}>
//               <a href="#" onClick={() => setSelectedModuleHandler(`DataList - ${module}`)}>
//                 {module}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>
//       <div className="Inner-Section">
//       <div className="Dashboard-Navbar">
//             <div className="user-account">
//                 <div className="user-profile">
//                     <div className="user-detail">
//                         <h3>{userName ? userName : "User"}</h3>
//                     </div>
//                     <div className="Logout-button">
//                         <a href="#" onClick={handleLogout}>
//                             <span className="material-symbols-outlined"> logout </span>Logout
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="InnerDashboard">{renderContent()}</div>
//       </div>
//       <ChatBot />
//     </div>
//   );
// }




"use client";
import { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";
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
import Report from './pages/Report';
// import EditableTextPage from "./pages/adminedit";

type ModuleInfo = {
  day: string;
  module: string;
  component: React.ComponentType;
  customName: string;
};

export default function Dashboard() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);

  let baseModules = [
    "Onboarding", "Report", "Introduction To Fluxe", "Introduction To Engine", 
    "Data Creation Guidelines", "Importance of Data Population and Diversity", 
    "Prompts: Instructions and Annotations", "Prompting Basics",
    "Extensive Tool Coverage And Function Mapper", "Suggested Reading Materials", 
    "Final Checklist", "Glossary"
  ];

  if (userType === "In-House Team") {
    baseModules = baseModules.filter(module => !["Onboarding", "Extensive Tool Coverage And Function Mapper","Suggested Reading Materials"].includes(module));
  }
  
  if (userType === "Domain Expert") {
    baseModules = baseModules.filter(module => !["Report", "Extensive Tool Coverage And Function Mapper","Suggested Reading Materials"].includes(module));
  }
  
  if (userType === "Agent Trainer") {
    baseModules = baseModules.filter(module => ![
    "Onboarding", "Report", "Introduction To Fluxe", "Introduction To Engine", 
    "Importance of Data Population and Diversity", 
    "Prompts: Instructions and Annotations", "Prompting Basics",
    "Extensive Tool Coverage And Function Mapper", "Suggested Reading Materials", 
    "Final Checklist", "Glossary"].includes(module));
  }
  const dayModules: { [key: string]: string[] } = {
    "DataList": userType === "ADMIN" ? ["ADMIN", ...baseModules] : baseModules,
  };

  const moduleMap: { [key: string]: ModuleInfo } = Object.fromEntries(
    dayModules["DataList"].map((module) => [
      `DataList - ${module}`,
      {
        day: "DataList",
        module,
        component: ({
            "ADMIN": Admin,
            "Onboarding": UserDashboard,
            "Report": Report,
            "Introduction To Fluxe": Fluxe,
            "Introduction To Engine": Engine,
            "Data Creation Guidelines": DataCreation,
            "Importance of Data Population and Diversity": DataPopulation,
            "Prompts: Instructions and Annotations": PromptsInstructions,
            "Prompting Basics": BasicsPrompt,
            "Extensive Tool Coverage And Function Mapper": ToolCoverage,
            "Suggested Reading Materials": ReadingMaterial,
            "Final Checklist": FinalCheck,
            "Glossary": Glossary,
          }[module] as React.ComponentType) || undefined,
          
        customName: module.replace(/\s+/g, "_")
      }
    ])
  );

  useEffect(() => {
    const sessionExpireTime = sessionStorage.getItem("sessionExpireTime");
    const currentTime = new Date().getTime();
    const storedUserName = sessionStorage.getItem("userName");
    const storedUserType = sessionStorage.getItem("userType");

    if (storedUserType) setUserType(storedUserType);
    if (storedUserName) setUserName(storedUserName);
    if (!sessionExpireTime || currentTime > Number(sessionExpireTime)) {
      handleLogout();
    } else {
      setTimeout(handleLogout, Number(sessionExpireTime) - currentTime);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const moduleNameFromUrl = urlParams.get("module");
    if (moduleNameFromUrl) {
      const foundModuleKey = Object.keys(moduleMap).find(
        key => moduleMap[key].module === moduleNameFromUrl
      );
      if (foundModuleKey) setSelectedModule(foundModuleKey);
    } else {
      const storedModule = localStorage.getItem("selectedModule");
      if (storedModule) setSelectedModule(storedModule);
    }
    setLoading(false);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.clear();
      router.push("/");
      setTimeout(() => window.location.reload(), 100);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (selectedModule && moduleMap[selectedModule]) {
      const SelectedComponent = moduleMap[selectedModule].component;
      return <SelectedComponent />;
    }
  };

  const setSelectedModuleHandler = (moduleKey: string) => {
    if (moduleMap[moduleKey]) {
      setSelectedModule(moduleKey);
      localStorage.setItem("selectedModule", moduleKey);
      router.push(`/dashboard?module=${encodeURIComponent(moduleMap[moduleKey].customName)}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="Dashboard-Section">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`} style={{width:"27%"}}>
        <div className="sidebar-header">
          <Image src={Logo1} alt="Logo" width={180} height={0} />
        </div>
        <hr/>
        <ul className="sidebar-links">
          {dayModules["DataList"].map((module, index) => (
            <li key={index}>
              <a href="#" onClick={() => setSelectedModuleHandler(`DataList - ${module}`)}>
                {module}
              </a>
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
      <ChatBot />
    </div>
  );
}

