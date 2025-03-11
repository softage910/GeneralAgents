// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { database } from "@/lib/firebaseconfig";
// import { get, ref } from "firebase/database";
// import Logo from "../../../public/Images/Logo-removebg-preview.png";

// export default function SignInPage() {
//     const [email, setEmail] = useState("");
//     const [loginError, setLoginError] = useState<string | null>(null);
//     const [loginMessage, setLoginMessage] = useState<string | null>(null);
//     const router = useRouter();

//     const handleSignIn = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoginError(null);
//         setLoginMessage(null);

//         try 
//         {
//             const allowedUsersRef = ref(database, "AllowedUsers");
//             const snapshot = await get(allowedUsersRef);

//             if (!snapshot.exists()) {
//                 setLoginError("Access denied. No allowed users found.");
//                 return;
//             }

//             const allowedUsers = snapshot.val();
//             const user = Object.values(allowedUsers).find(
//                 (userData) => (userData as { email: string }).email === email
//             ) as {
//                 email: string; name: string 
//             } | undefined;

//             if (!user) {
//                 setLoginError("Access denied. Your email is not registered.");
//                 return;
//             }

//             const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
//             sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
//             sessionStorage.setItem("userName", user.name || "User");
//             sessionStorage.setItem("userEmail", user.email || "Email");

//             setLoginMessage("Redirecting...");
//             router.push(`/dashboard`);
//         } catch (err) {
//             setLoginError("Something went wrong. Please try again.");
//             console.error("Login error:", err);
//         }
//     };

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
//                         <form onSubmit={handleSignIn} className="mt-6">
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
//                                 className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
//                                 LOGIN
//                             </button>
//                             {loginMessage && <p className="mt-4 text-center text-green-500">{loginMessage}</p>}
//                             {loginError && <p className="mt-4 text-center text-red-500">{loginError}</p>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { database } from "@/lib/firebaseconfig";
import { get, ref } from "firebase/database";
import Logo from "../../../public/Images/logo-ring.png";


export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState<string | null>(null);
    const [loginMessage, setLoginMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSignIn = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError(null);
        setLoginMessage(null);

        try {
            const snapshot = await get(ref(database, "AllowedUsers"));
            if (!snapshot.exists()) {
                setLoginError("Access denied. No allowed users found.");
                return;
            }

            const allowedUsers = snapshot.val();
            const user = Object.values(allowedUsers).find(
                (userData) => (userData as { email: string }).email === email
            ) as { email: string; name: string } | undefined;

            if (!user) {
                setLoginError("Access denied. Your email is not registered.");
                return;
            }

            const sessionExpireTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
            sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
            sessionStorage.setItem("userName", user.name);
            sessionStorage.setItem("userEmail", user.email);

            setLoginMessage("Redirecting...");
            router.push("/dashboard?Onboarding");
        } catch (err) {
            setLoginError("Something went wrong. Please try again.");
            console.error("Login error:", err);
        }
    }, [email, router]);

    return (
        <div className="main">
            <div className="logo-ring">
                        <Image src={Logo} alt="Logo" width={80} height={0} priority />
            </div>
            <div className="mainsection">
                <div className="container">
                    <div>GENERAL AGENTS</div>
                </div>
                <div className="flex items-center justify-center back-css p-5">
                    <div className="inner-card w-full max-w-md p-8 rounded-lg">
                        <form onSubmit={handleSignIn} className="mt-6">
                            <h2 className="login-heading">Login</h2>
                            <label className="block text-white">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="login-btn w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
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
