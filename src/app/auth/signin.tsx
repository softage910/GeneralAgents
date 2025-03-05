// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter
// import Image from "next/image";
// import { database } from "@/lib/firebaseconfig";
// import { get, ref } from "firebase/database";
// import Logo from './Logo.png';


// export default function SignInPage() {
//     const [email, setEmail] = useState("");
//     // const [generatedOtp, setGeneratedOtp] = useState(null);
//     const [Loginerror, setLoginError] = useState<string | null>(null);
//     const [Loginmessage, setLoginMessage] = useState<string | null>(null);
//     // const [showOtpField, setShowOtpField] = useState(false);
//     // const [showSigninField, setshowSigninField] = useState(true);
//     const [FullName, setFullName] = useState("");
//     // const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

//     const router = useRouter();

//     // const verifyOtp = () => {
//     //     const enteredOtp = otp.join(""); // Convert array to string to compare the entered otp with the generated otp

//     //     if (enteredOtp === generatedOtp) {
//     //         const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
//     //         sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
//     //         sessionStorage.setItem("userName", FullName);

//     //         // Redirect to dashboard with user details
//     //         router.push(`/dashboard`);        
//     //     } else {
//     //         setLoginError("Invalid OTP. Please try again.");
//     //     }
//     // };

//     const handleSignIn = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoginError(null);
//         setLoginMessage(null);
    
//         try {
//             // Fetch AllowedUsers from Firebase
//             const allowedUsersRef = ref(database, "AllowedUsers");
//             const snapshot = await get(allowedUsersRef);
    
//             if (!snapshot.exists()) {
//                 setLoginError("Access denied. No allowed users found.");
//                 return;
//             }
    
//             // Get Allowed Users data
//             const allowedUsers = snapshot.val();
    
//             // Find the user by email
//             const user = Object.values(allowedUsers).find(
//                 (userData) => (userData as { email: string }).email === email
//             );

//             setFullName((user as { name: string }).name || "User");

    
//             if (!user) {
//                 setLoginError("Access denied. Your email is not registered.");
//                 return;
//             }else{

//                             const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
//             sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
//             sessionStorage.setItem("userName", FullName);

//             // Redirect to dashboard with user details
//             router.push(`/dashboard`);    
//                 setLoginMessage("Redirecting....")
//             }
    
//             // Set Full Name    
//             // // Send OTP to email
//             // const response = await fetch("/api/send-otp", {
//             //     method: "POST",
//             //     headers: { "Content-Type": "application/json" },
//             //     body: JSON.stringify({ email }),
//             // });
    
//             // const data = await response.json();
    
//             // if (response.ok) {
//             //     setShowOtpField(true);
//             //     setshowSigninField(false);
//             //     setGeneratedOtp(data.otp);
//             //     setLoginMessage("OTP sent to your email. Please enter the OTP to proceed.");
//             // } else {
//             //     setLoginError(data.error || "Failed to send OTP. Please try again.");
//             // }
//         } catch (err) {
//             setLoginError("Something went wrong. Please try again.");
//             console.error("Login error:", err);
//         }
//     };
    



//     // const handleSignIn = async (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     setLoginError(null);
//     //     setLoginMessage(null);

//     //     try {
//     //         // Fetch AllowedUsers from Firebase
//     //         const allowedUsersRef = ref(database, "AllowedUsers");
//     //         const snapshot = await get(allowedUsersRef);

//     //         if (!snapshot.exists()) {
//     //             setLoginError("Access denied. No allowed users found.");
//     //             return;
//     //         }

//     //         // Get Allowed Users data
//     //         const allowedUsers = snapshot.val();

//     //         // Find the user by email
//     //         const user = Object.values(allowedUsers).find(
//     //             (userData) => (userData as { email: string }).email === email
//     //         );

//     //         if (!user) {
//     //             setLoginError("Access denied. Your email is not registered.");
//     //             return;
//     //         }

//     //         // Set Full Name
//     //         const userName = (user as { name: string }).name || "User";
//     //         setFullName(userName);
            

//     //         // Store session data
//     //         const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
//     //         sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
//     //         sessionStorage.setItem("userName", userName);

//     //         setLoginMessage("Redirecting...");
//     //         router.push("/dashboard");
//     //     } catch (err) {
//     //         setLoginError("Something went wrong. Please try again.");
//     //         console.error("Login error:", err);
//     //     }
//     // };



//     // const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     //     const value = e.target.value;

//     //     if (!/^\d$/.test(value)) return; // Ensure only digits are entered

//     //     const newOtp = [...otp];
//     //     newOtp[index] = value;
//     //     setOtp(newOtp);

//     //     // Move focus to the next input field if there's a value and it's not the last field
//     //     if (index < 5 && value) {
//     //         document.getElementById(`otp-input-${index + 1}`)?.focus();
//     //     }
//     // };

//     // const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     //     if (e.key === "Backspace") {
//     //         const newOtp = [...otp];

//     //         if (!otp[index] && index > 0) {
//     //             document.getElementById(`otp-input-${index - 1}`)?.focus();
//     //         }

//     //         newOtp[index] = "";
//     //         setOtp(newOtp);
//     //     }
//     // };

//     // const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     //     e.preventDefault();
//     //     const pasteData = e.clipboardData.getData("text").trim();

//     //     if (/^\d{6}$/.test(pasteData)) { // Ensure it's exactly 6 digits
//     //         const newOtp = pasteData.split("");
//     //         setOtp(newOtp);

//     //         // Move focus to the last OTP input field
//     //         document.getElementById(`otp-input-5`)?.focus();
//     //     }
//     // };
    
//     return (
//         <div className="main">
//             <div className="mainsection">
//                 <div className="container">
//                     <div className="Logo">
//                         <Image src={Logo} alt="Logo" width={250} height={50} />
//                     </div>
        
//                 </div>
//                 <div className="flex items-center justify-center back-css p-5">
//                     <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">


//                     <form onSubmit={handleSignIn} className="mt-6">
//                             <div className="login-heading">
//                                 <h2>Login</h2>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600">Email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition ">
//                                 LOGIN
//                             </button>
//                             {Loginmessage && <p className="mt-4 text-center text-green-500">{Loginmessage}</p>}
//                             {Loginerror && <p className="mt-4 text-center text-red-500">{Loginerror}</p>}
//                         </form>



//                         {/* {showSigninField && (<form onSubmit={handleSignIn} className="mt-6">
//                             <div className="login-heading">
//                                 <h2>Login</h2>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600">Email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition ">
//                                 LOGIN
//                             </button>
//                             {Loginmessage && <p className="mt-4 text-center text-green-500">{Loginmessage}</p>}
//                             {Loginerror && <p className="mt-4 text-center text-red-500">{Loginerror}</p>}
//                         </form>)} */}
// {/* 
//                         {showOtpField && (
//                             <div className="mt-4 p-5">
//                                 <label className="block text-gray-600">Enter OTP</label>

//                                 <div className="flex justify-center space-x-2 mt-2">
//                                     {otp.map((digit, index) => (
//                                         <input
//                                             key={index}
//                                             id={`otp-input-${index}`}
//                                             type="text"
//                                             maxLength={1}
//                                             className="w-12 h-12 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                             value={digit}
//                                             onChange={(e) => handleOtpChange(e, index)}
//                                             onKeyDown={(e) => handleOtpKeyDown(e, index)}
//                                             onPaste={handleOtpPaste} // Add paste handling here
//                                         />
//                                     ))}
//                                 </div>
//                                 <button
//                                     onClick={verifyOtp}
//                                     className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
//                                     Verify OTP
//                                 </button>
//                             </div>
//                         )} */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }














"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";
import { database } from "@/lib/firebaseconfig";
import { get, ref } from "firebase/database";
import Logo from "../../../public/Images/Logo-removebg-preview.png";


export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState<string | null>(null);
    const [loginMessage, setLoginMessage] = useState<string | null>(null);

    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError(null);
        setLoginMessage(null);

        try {
            const allowedUsersRef = ref(database, "AllowedUsers");
            const snapshot = await get(allowedUsersRef);

            if (!snapshot.exists()) {
                setLoginError("Access denied. No allowed users found.");
                return;
            }

            const allowedUsers = snapshot.val();
            const user = Object.values(allowedUsers).find(
                (userData) => (userData as { email: string }).email === email
            ) as {
                email: string; name: string 
} | undefined;

            if (!user) {
                setLoginError("Access denied. Your email is not registered.");
                return;
            }

            const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
            sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
            sessionStorage.setItem("userName", user.name || "User");
            sessionStorage.setItem("userEmail", user.email || "Email");

            setLoginMessage("Redirecting...");
            router.push(`/dashboard`);
        } catch (err) {
            setLoginError("Something went wrong. Please try again.");
            console.error("Login error:", err);
        }
    };

    return (
        <div className="main">
            <div className="mainsection">
                <div className="container">
                    <div className="Logo">
                        <Image src={Logo} alt="Logo" width={250} height={50} />
                    </div>
                </div>
                <div className="flex items-center justify-center back-css p-5">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                        <form onSubmit={handleSignIn} className="mt-6">
                            <div className="login-heading">
                                <h2>Login</h2>
                            </div>
                            <div>
                                <label className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                LOGIN
                            </button>
                            {loginMessage && <p className="mt-4 text-center text-green-500">{loginMessage}</p>}
                            {loginError && <p className="mt-4 text-center text-red-500">{loginError}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
