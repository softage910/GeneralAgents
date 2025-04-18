// // "use client";
// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";
// // import { database } from "@/lib/firebaseconfig";
// // import { get, ref } from "firebase/database";
// // import Logo from "../../../public/Images/Logo-removebg-preview.png";

// // export default function SignInPage() {
// //     const [email, setEmail] = useState("");
// //     const [loginError, setLoginError] = useState<string | null>(null);
// //     const [loginMessage, setLoginMessage] = useState<string | null>(null);
// //     const router = useRouter();

// //     const handleSignIn = async (e: React.FormEvent) => {
// //         e.preventDefault();
// //         setLoginError(null);
// //         setLoginMessage(null);

// //         try 
// //         {
// //             const allowedUsersRef = ref(database, "AllowedUsers");
// //             const snapshot = await get(allowedUsersRef);

// //             if (!snapshot.exists()) {
// //                 setLoginError("Access denied. No allowed users found.");
// //                 return;
// //             }

// //             const allowedUsers = snapshot.val();
// //             const user = Object.values(allowedUsers).find(
// //                 (userData) => (userData as { email: string }).email === email
// //             ) as {
// //                 email: string; name: string 
// //             } | undefined;

// //             if (!user) {
// //                 setLoginError("Access denied. Your email is not registered.");
// //                 return;
// //             }

// //             const sessionExpireTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
// //             sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
// //             sessionStorage.setItem("userName", user.name || "User");
// //             sessionStorage.setItem("userEmail", user.email || "Email");

// //             setLoginMessage("Redirecting...");
// //             router.push(`/dashboard`);
// //         } catch (err) {
// //             setLoginError("Something went wrong. Please try again.");
// //             console.error("Login error:", err);
// //         }
// //     };

// //     return (
// //         <div className="main">
// //             <div className="mainsection">
// //                 <div className="container">
// //                     <div className="Logo">
// //                         <Image src={Logo} alt="Logo" width={250} height={50} />
// //                     </div>
// //                 </div>
// //                 <div className="flex items-center justify-center back-css p-5">
// //                     <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
// //                         <form onSubmit={handleSignIn} className="mt-6">
// //                             <div className="login-heading">
// //                                 <h2>Login</h2>
// //                             </div>
// //                             <div>
// //                                 <label className="block text-gray-600">Email</label>
// //                                 <input
// //                                     type="email"
// //                                     placeholder="Enter your email"
// //                                     className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                                     value={email}
// //                                     onChange={(e) => setEmail(e.target.value)}
// //                                     required
// //                                 />
// //                             </div>
// //                             <button
// //                                 type="submit"
// //                                 className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
// //                                 LOGIN
// //                             </button>
// //                             {loginMessage && <p className="mt-4 text-center text-green-500">{loginMessage}</p>}
// //                             {loginError && <p className="mt-4 text-center text-red-500">{loginError}</p>}
// //                         </form>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }






// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { auth, database, googleProvider } from "@/lib/firebaseconfig";
// import { get, ref, set } from "firebase/database";
// import Logo from "../../../public/Images/Logo-removebg-preview.png";
// import { signInWithPopup } from "firebase/auth";

// export default function SignInPage() {
//     const [loginError, setLoginError] = useState<string | null>(null);
//     const [loginMessage, setLoginMessage] = useState<string | null>(null);
//     const router = useRouter();


//     const handleGoogleSignIn = async () => {
//         try {
//             const result = await signInWithPopup(auth, googleProvider);
//             const user = result.user;
    
//             // Check if the user exists in the invitedUsers database
//             const invitedUsersRef = ref(database, "invitedUsers");
//             const invitedUsersSnapshot = await get(invitedUsersRef);
    
//             if (!invitedUsersSnapshot.exists()) {
//                 setLoginError("Access denied. No invited users found.");
//                 return;
//             }
    
//             const invitedUsers = invitedUsersSnapshot.val();
//             const invitedUserKey = Object.keys(invitedUsers).find(
//                 (key) => invitedUsers[key].email === user.email
//             );
    
//             if (!invitedUserKey) {
//                 setLoginError("Access denied. Your email is not invited.");
//                 return;
//             }
    
//             const userData = invitedUsers[invitedUserKey];
    
//             // If the user is logging in for the first time, update their details
//             if (userData.status !== "Joined") {

//                 // const joinDate = new Date().toLocaleString("en-US", options); // Readable format
//                 const joinDate = new Date().toLocaleDateString("en-GB"); // "12/03/2025"

    
//                 await set(ref(database, `invitedUsers/${invitedUserKey}`), {
//                     ...userData,
//                     status: "Joined",
//                     joiningdate: joinDate,
//                     name: user.displayName,
//                 });


//             }
    
//             sessionStorage.setItem("sessionExpireTime", (Date.now() + 24 * 60 * 60 * 1000).toString());
//             sessionStorage.setItem("userName", user.displayName || "");
//             sessionStorage.setItem("userEmail", user.email || "");
//             sessionStorage.setItem("userType", userData.type || "");

    
//             // ✅ Redirect based on user type
//                 router.push("/dashboard?Onboarding");
    
//             setLoginMessage("Redirecting...");
//         } catch (error) {
//             console.error("Google Sign-In failed:", error);
//             setLoginError("Google Sign-In failed. Please try again.");
//         }
//     };
    
//     // const handleSignIn = useCallback(async (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     setLoginError(null);
//     //     setLoginMessage(null);

//     //     try {
//     //         const snapshot = await get(ref(database, "AllowedUsers"));
//     //         if (!snapshot.exists()) {
//     //             setLoginError("Access denied. No allowed users found.");
//     //             return;
//     //         }

//     //         const allowedUsers = snapshot.val();
//     //         const user = Object.values(allowedUsers).find(
//     //             (userData) => (userData as { email: string }).email === email
//     //         ) as { email: string; name: string } | undefined;

//     //         if (!user) {
//     //             setLoginError("Access denied. Your email is not registered.");
//     //             return;
//     //         }

//     //         const sessionExpireTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
//     //         sessionStorage.setItem("sessionExpireTime", sessionExpireTime.toString());
//     //         sessionStorage.setItem("userName", user.name);
//     //         sessionStorage.setItem("userEmail", user.email);

//     //         setLoginMessage("Redirecting...");
//     //         router.push("/dashboard?Onboarding");
//     //     } catch (err) {
//     //         setLoginError("Something went wrong. Please try again.");
//     //         console.error("Login error:", err);
//     //     }
//     // }, [email, router]);





//     return (
//         <div className="main">
//             <div className="mainsection">
//                 <div className="container">
//                     <div className="Logo">
//                         <Image src={Logo} alt="Logo" width={250} height={50} priority />
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center back-css p-5">
//                     <div className="inner-card w-full max-w-md p-8 rounded-lg">
//                         <form  className="mt-6">
//                             <h2 className="login-heading">Login</h2>
//                             <button
//     type="button"
//     onClick={handleGoogleSignIn}
//     className="custom-google w-full flex items-center justify-center border border-gray-300 rounded-full py-2 px-4  transition"
// >
//     <img
//         src="https://developers.google.com/identity/images/g-logo.png"
//         alt="Google logo"
//         className="w-5 h-5 mr-2 goog-img"
//     />
//     <span className="text-gray-700 font-medium">Sign in with Google</span>
// </button>

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
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { auth, database, googleProvider } from "@/lib/firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { get, ref } from "firebase/database";
import Logo from "../../../public/Images/Logo-removebg-preview.png";

export default function SignInPage() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const inviteKey = searchParams.get("key");

    if (inviteKey) {
      autoLoginUsingKey(inviteKey);
    }
  }, []);

  const autoLoginUsingKey = async (key: string) => {
    try {
      const userRef = ref(database, `invitedUsers/${key}`);
      const snapshot = await get(userRef);
  
      if (!snapshot.exists()) {
        setLoginError("Invalid invite key. Access denied.");
        return;
      }
  
      const userData = snapshot.val();
  
      sessionStorage.setItem(
        "sessionExpireTime",
        (Date.now() + 24 * 60 * 60 * 1000).toString()
      );
      sessionStorage.setItem("userName", userData.name || "");
      sessionStorage.setItem("userEmail", userData.email || "");
      sessionStorage.setItem("userType", userData.type || "");
  
      setLoginMessage("Redirecting...");
      router.push("/dashboard?Onboarding");
    } catch (error) {
      console.error("Auto-login using key failed:", error);
      setLoginError("Auto-login failed. Please sign in manually.");
    }
  };
  

  // const verifyIdTokenAndLogin = async (idToken: string) => {
  //   try {
  //     const response = await fetch(`/api/verify-token?idToken=${idToken}`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ idToken }),
  //     });

  //     const result = await response.json();
  //     if (!result.success || !result.user?.email) {
  //       throw new Error("Token verification failed");
  //     }

  //     const userEmail = result.user.email;

  //     const invitedUsersRef = ref(database, "invitedUsers");
  //     const invitedUsersSnapshot = await get(invitedUsersRef);

  //     if (!invitedUsersSnapshot.exists()) {
  //       setLoginError("Access denied. No invited users found.");
  //       return;
  //     }

  //     const invitedUsers = invitedUsersSnapshot.val();
  //     const invitedUserKey = Object.keys(invitedUsers).find(
  //       (key) => invitedUsers[key].email === userEmail
  //     );

  //     if (!invitedUserKey) {
  //       setLoginError("Access denied. Your email is not invited.");
  //       return;
  //     }

  //     const userData = invitedUsers[invitedUserKey];

  //     sessionStorage.setItem(
  //       "sessionExpireTime",
  //       (Date.now() + 24 * 60 * 60 * 1000).toString()
  //     );
  //     sessionStorage.setItem("userName", result.user.name || "");
  //     sessionStorage.setItem("userEmail", userEmail || "");
  //     sessionStorage.setItem("userType", userData.type || "");

  //     setLoginMessage("Redirecting...");
  //     router.push("/dashboard?Onboarding");
  //   } catch (error) {
  //     console.error("ID token verification failed:", error);
  //     setLoginError("Auto-login failed. Please sign in manually.");
  //   }
  // };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const invitedUsersRef = ref(database, "invitedUsers");
      const invitedUsersSnapshot = await get(invitedUsersRef);

      if (!invitedUsersSnapshot.exists()) {
        setLoginError("Access denied. No invited users found.");
        return;
      }

      const invitedUsers = invitedUsersSnapshot.val();
      const invitedUserKey = Object.keys(invitedUsers).find(
        (key) => invitedUsers[key].email === user.email
      );

      if (!invitedUserKey) {
        setLoginError("Access denied. Your email is not invited.");
        return;
      }

      const userData = invitedUsers[invitedUserKey];

      sessionStorage.setItem(
        "sessionExpireTime",
        (Date.now() + 24 * 60 * 60 * 1000).toString()
      );
      sessionStorage.setItem("userName", user.displayName || "");
      sessionStorage.setItem("userEmail", user.email || "");
      sessionStorage.setItem("userType", userData.type || "");

      router.push("/dashboard?Onboarding");
      setLoginMessage("Redirecting...");
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      setLoginError("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="main">
      <div className="mainsection">
        <div className="container">
          <div className="Logo">
            <Image
              src={Logo}
              alt="Logo"
              width={250}
              height={50}
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-center back-css p-5">
          <div className="inner-card w-full max-w-md p-8 rounded-lg">
            <form className="mt-6">
              <h2 className="login-heading">Login</h2>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="custom-google w-full flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 transition"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google logo"
                  className="w-5 h-5 mr-2 goog-img"
                />
                <span className="text-gray-700 font-medium">
                  Sign in with Google
                </span>
              </button>

              {loginMessage && (
                <p className="mt-4 text-center text-green-500">
                  {loginMessage}
                </p>
              )}
              {loginError && (
                <p className="mt-4 text-center text-red-500">
                  {loginError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

