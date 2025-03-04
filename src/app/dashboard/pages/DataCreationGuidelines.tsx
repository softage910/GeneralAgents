import "./General.css";
import { useState, useEffect } from "react";
import { database, auth } from "../../../lib/firebaseconfig";
import { ref, get } from "firebase/database";
import Topic1 from "./datacreationguidelines/Topic1";
import Topic2 from "./datacreationguidelines/Topic2";
import Topic3 from "./datacreationguidelines/Topic3";
import Topic4 from "./datacreationguidelines/Topic4";
import Topic5 from "./datacreationguidelines/Topic5";
import Topic6 from "./datacreationguidelines/Topic6";
import Topic7 from "./datacreationguidelines/Topic7";
import Topic8 from "./datacreationguidelines/Topic8";
import Topic9 from "./datacreationguidelines/Topic9";






export default function DataCreation() {
    const [selectedTopic, setSelectedTopic] = useState<number>(1); // Start from Topic 1
    const userId = auth.currentUser?.uid;

    const topics = [
        { id: 1, key: "Topic1", component: <Topic1 /> },
        { id: 2, key: "Topic2", component: <Topic2 /> },
        { id: 3, key: "Topic3", component: <Topic3 /> },
        { id: 4, key: "Topic4", component: <Topic4 /> },
        { id: 5, key: "Topic5", component: <Topic5 /> },
        { id: 6, key: "Topic6", component: <Topic6 /> },
        { id: 7, key: "Topic7", component: <Topic7 /> },
        { id: 8, key: "Topic8", component: <Topic8 /> },
        { id: 9, key: "Topic9", component: <Topic9 /> }


    ];

    useEffect(() => {
        if (!userId) return;
        const userProgressRef = ref(database, `userProgress/${userId}/day5/module`);

        get(userProgressRef).then((snapshot) => {
            if (snapshot.exists()) {
            }
        });
    }, [userId]);

    const selectedTopicIndex = topics.findIndex((topic) => topic.id === selectedTopic);
    const selectedTopicContent = topics[selectedTopicIndex]?.component;

    const handleNextTopic = async () => {

        if (selectedTopicIndex < topics.length - 1) {
            setSelectedTopic(topics[selectedTopicIndex + 1].id);
        }
    };

    const handlePreviousTopic = () => {
        if (selectedTopicIndex > 0) {
            setSelectedTopic(topics[selectedTopicIndex - 1].id);
        }
    };
    return (
        <div className="Day1-Main">
            <div className="Header">
                <h1 className="h1">INTRODUCTION TO THE
                    ECOSYSTEM AND DATA CREATION
                    GUIDELINES</h1>
            </div>

            <div className="MainContent">
                {selectedTopicContent}

                <div className="Toggle-Topic">
                    {selectedTopicIndex > 0 && (
                        <button className="Read-Button-Previous" onClick={handlePreviousTopic}>
                            ← Previous Topic
                        </button>
                    )}

                    {selectedTopicIndex < topics.length - 1 ? (
                        <button className="Read-Button-Next" onClick={handleNextTopic}>
                            {selectedTopicIndex === 0 ? "Let's Get Started →" : "Next Topic →"}
                        </button>
                    ) : (
                        <></>

                    )}
                </div>
            </div>
        </div>
    );
}