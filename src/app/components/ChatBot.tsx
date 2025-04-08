// "use client";
// import Image from "next/image";
// import './ChatBot.css';
// import chatbot from '../../../public/Images/chatbot.png';
// import React, { useEffect, useState } from "react";


// export default function ChatBot() {
//     const [closeChatbot, setcloseChatbot] = useState(false); 
//     const [openChatbot, setopenChatbot] = useState(true);
//     const [message, setMessage] = useState("");
//     const [fullname, setfullname] = useState("");
//     const [email, setemail] = useState("");


//     useEffect(() => {
//         const storedFullName = sessionStorage.getItem("userName");
//         const storedEmail = sessionStorage.getItem("userEmail");
//         if (storedFullName) {
//             setfullname(storedFullName);
//         }

//         if(storedEmail){
//             setemail(storedEmail);
//         }
//     }, []);

//     const closeChat = () =>{
//         setcloseChatbot(false);
//         setopenChatbot(true);
//     }

//     const openChat = () =>{
//         setcloseChatbot(true);
//         setopenChatbot(false);
//     }

//     const handleSubmit = async () => {

//         const res = await fetch("/api/send-query", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, fullname, message }),
//         });

//         // const data = await res.json();
//         // setStatus(data.message);

//         if (res.ok) {
//             setMessage("");
//         }

//         setcloseChatbot(false);
//         setopenChatbot(true);
//     };

//     return (
//         <>
//             <div className="ChatBot-Section">
//                 {openChatbot && ( <div className="chatbot-btn" onClick={openChat}>
//                     <Image src={chatbot} alt="" width={0} height={0} />
//                 </div>)}
//                 {closeChatbot && (<div className="Query-Section">
//                     <div className="wrapper">
//                         <div className="title"><h4>Shoot us your queries!</h4><button onClick={closeChat}>close</button></div>
//                             <div className="box">
//                                 <div className="typing-area">
//                                     <div className="input-field">
//                                         <textarea
//                                             value={message}
//                                             onChange={(e) => setMessage(e.target.value)}
//                                             placeholder="Type your message" required>
//                                         </textarea>
//                                     </div>
//                                 </div>
//                             </div>

//                         <div className="Query-Submit">
//                             <button onClick={handleSubmit}>send</button>
//                         </div>
//                     </div>
//                 </div>)}
//             </div>
//         </>
//     );
// }


"use client";
import Image from "next/image";
import "./ChatBot.css";
import chatbot from "../../../public/Images/chatbot.png";
import React, { useEffect, useState } from "react";

export default function ChatBot() {
    const [closeChatbot, setcloseChatbot] = useState(false);
    const [openChatbot, setopenChatbot] = useState(true);
    const [message, setMessage] = useState("");
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [loading, setLoading] = useState(false); // 🔹 Added loading state

    useEffect(() => {
        const storedFullName = sessionStorage.getItem("userName");
        const storedEmail = sessionStorage.getItem("userEmail");
        if (storedFullName) setfullname(storedFullName);
        if (storedEmail) setemail(storedEmail);
    }, []);

    const closeChat = () => {
        setcloseChatbot(false);
        setopenChatbot(true);
    };

    const openChat = () => {
        setcloseChatbot(true);
        setopenChatbot(false);
    };

    const handleSubmit = async () => {
        if (!message.trim()) return; 

        setLoading(true); // 🔹 Start loading

        try {
            const res = await fetch("/api/send-query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, fullname, message }),
            });

            if (res.ok) {
                setMessage(""); // Reset message input
            } else {
                console.error("Failed to send query");
            }
        } catch (error) {
            console.error("Error:", error);
        }

        setLoading(false); // 🔹 Stop loading
        setcloseChatbot(false);
        setopenChatbot(true);
    };

    return (
        <>
            <div className="ChatBot-Section">
                {openChatbot && (
                    <div className="chatbot-btn" onClick={openChat}>
                        <Image src={chatbot} alt="Chatbot" width={0} height={0} />
                    </div>
                )}
                {closeChatbot && (
                    <div className="Query-Section">
                        <div className="wrapper">
                            <div className="title">
                                <h4>Shoot us your queries!</h4>
                                <button onClick={closeChat}>close</button>
                            </div>
                            <div className="box">
                                <div className="typing-area">
                                    <div className="input-field">
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type your message"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="Query-Submit">
                                <button onClick={handleSubmit} disabled={loading}>
                                    {loading ? (
                                        <div className="loading-content">
                                            <span className="spinner"></span> Sending...
                                        </div>
                                    ) : (
                                        "Send"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

    
            <style jsx>{`
                .loading-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid white;
                    border-top-color: transparent;
                    border-radius: 50%;
                    animation: spin 0.6s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
}
