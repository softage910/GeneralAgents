"use client";
import Image from "next/image";
import './ChatBot.css';
import chatbot from '../../../public/Images/chatbot.png';
import React, { useEffect, useState } from "react";


export default function ChatBot() {
    const [closeChatbot, setcloseChatbot] = useState(false); 
    const [openChatbot, setopenChatbot] = useState(true);
    const [message, setMessage] = useState("");
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");


    useEffect(() => {
        const storedFullName = sessionStorage.getItem("userName");
        const storedEmail = sessionStorage.getItem("userEmail");
        if (storedFullName) {
            setfullname(storedFullName);
        }

        if(storedEmail){
            setemail(storedEmail);
        }
    }, []);

    const closeChat = () =>{
        setcloseChatbot(false);
        setopenChatbot(true);
    }

    const openChat = () =>{
        setcloseChatbot(true);
        setopenChatbot(false);
    }

    const handleSubmit = async () => {

        const res = await fetch("/api/send-query", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, fullname, message }),
        });

        // const data = await res.json();
        // setStatus(data.message);

        if (res.ok) {
            setMessage("");
        }

        setcloseChatbot(false);
        setopenChatbot(true);
    };

    return (
        <>
            <div className="ChatBot-Section">
                {openChatbot && ( <div className="chatbot-btn" onClick={openChat}>
                    <Image src={chatbot} alt="" width={0} height={0} />
                </div>)}
                {closeChatbot && (<div className="Query-Section">
                    <div className="wrapper">
                        <div className="title"><h4>Shoot us your queries!</h4><button onClick={closeChat}>close</button></div>
                            <div className="box">
                                <div className="typing-area">
                                    <div className="input-field">
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type your message" required>
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                        <div className="Query-Submit">
                            <button onClick={handleSubmit}>send</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    );
}