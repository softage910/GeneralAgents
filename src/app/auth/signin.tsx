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
import { auth, database, googleProvider } from "@/lib/firebaseconfig";
import { get, ref, set } from "firebase/database";
import Logo from "../../../public/Images/Logo-removebg-preview.png";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import Link from "next/link";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState<string | null>(null);
    const [loginMessage, setLoginMessage] = useState<string | null>(null);
    // const [password, setPassword] = useState("");
    const [SignUperror, setSignUpError] = useState<string | null>(null);
    const [SignUpmessage, setSignUpMessage] = useState<string | null>(null);
    const [showSigninField, setshowSigninField] = useState(true);
    const [showSignupField, setshowSignupField] = useState(false);
    const [FullName, setFullName] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();


    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // ✅ Store user details in Firestore (if needed)
            await set(ref(database, `users/${user.uid}`), {
                name: user.displayName,
                email: user.email,
                profilePic: user.photoURL,
                provider: "Google",
            });

            sessionStorage.setItem("sessionExpireTime", (Date.now() + 24 * 60 * 60 * 1000).toString());
            sessionStorage.setItem("userName", user.displayName || "");
            sessionStorage.setItem("userEmail", user.email || "");

            setLoginMessage("Redirecting...");
            router.push("/dashboard?Onboarding");
        } catch (error) {
            setLoginError("Google Sign-In failed. Please try again.");
        }
    };

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

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setSignUpError(null);
        setSignUpMessage(null);
      
        if (UserPassword !== ConfirmPassword) {
          setSignUpError("Passwords do not match.");
          return;
        }
    
      
        try {
          // Create user in Firebase Authentication
          const userCredential = await createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
          const user = userCredential.user;
      
          if (user) {
            // Get the current date and time
            const signUpDate = new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true, // Ensures AM/PM format
            });
    
    
            await set(ref(database, `users/${user.uid}`), {
              name: FullName,
              email: UserEmail,
              password: UserPassword,
            // Default role, change if needed
              signUpDate: signUpDate,
          });
        
          
      
            if (!user.emailVerified) {
              await sendEmailVerification(user);
              setSignUpMessage("A verification email has been sent. Please verify your email before logging in.");
            }
          }
        } catch (error) {
          console.error("Signup error:", error);
          setSignUpError("Error signing up. Please try again.");
        }
      };

      const toggle = () => {
        setshowSignupField(true);
        setshowSigninField(false);
      }
    
      const toggleback = () => {
        setshowSignupField(false);
        setshowSigninField(true);
      }

      const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword);
    
        // Check if confirm password matches the original password
        if (UserPassword && confirmPassword !== UserPassword) {
            setSignUpError("Passwords do not match");
        } else {
          setSignUpError(""); // Clear error if passwords match
        }
    };

    return (
        <div className="main">
            <div className="mainsection">
                <div className="container">
                    <div className="Logo">
                        <Image src={Logo} alt="Logo" width={250} height={50} priority />
                    </div>
                </div>
                <div className="flex items-center justify-center back-css p-5">
                    <div className="inner-card w-full max-w-md p-8 rounded-lg">
                        {showSigninField && (<form onSubmit={handleSignIn} className="mt-6">
                            <h2 className="login-heading">Login</h2>
                            <label className="block text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
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
                            <p style={{textAlign: "center", marginTop: "10px"}}>OR</p>
                            <button
    type="button"
    onClick={handleGoogleSignIn}
    className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 transition"
>
    <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        className="w-5 h-5 mr-2"
    />
    <span className="text-gray-700 font-medium">Sign in with Google</span>
</button>

                            <div className="togglebutton">
        <p>Don&apos;t Have An Account?</p>
        <Link className="Link" href="" onClick={toggle}>Sign-Up</Link>
      </div>
                            {loginMessage && <p className="mt-4 text-center text-green-500">{loginMessage}</p>}
                            {loginError && <p className="mt-4 text-center text-red-500">{loginError}</p>}
                        </form>)}

                        {showSignupField && (<form onSubmit={handleSignUp} className="mt-6">
          <div className="login-heading">
            <h2>Sign Up</h2>
          </div>
          <div className="mt-4" style={{display: "flex"}}>
            <div style={{marginRight: "10px"}}>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            </div>
            <div style={{marginLeft: "10px"}}>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full  px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={UserEmail}
              onChange={(e) => setUserEmail(e.target.value)} 
              required
            />
            </div>
          </div>

          <div className="mt-4" style={{display: "flex"}}>
            <div style={{marginRight: "10px"}}>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={UserPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
            </div>
            <div style={{marginLeft: "10px"}}>
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full  px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleConfirmPasswordChange}
              required
            />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition "
          >
            SIGNUP
          </button>
          <div className="togglebutton">
            <p>Already Have An Account?</p>
            <Link className="Link" href="" onClick={toggleback}>Sign-In</Link>
          </div>

          {SignUpmessage && <p className="mt-4 text-center text-green-500">{SignUpmessage}</p>}
          {SignUperror && <p className="mt-4 text-center text-red-500">{SignUperror}</p>}
        </form>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
