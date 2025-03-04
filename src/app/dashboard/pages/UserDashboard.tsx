"use client";
import "./UserDashboard.css";


export default function Dashboard() {



  return (
<div className="Progress-Section">

  <div className="ProgressbarContent">
    <h1>
    Welcome to General Agents Team!
    </h1>
    <br/>
    <p>Welcome to the ACE Data Collection Project! Our mission is to gather clean, precise recordings of tasks to train ACE, our computer control agent. As a data creator, you’ll play a key role in shaping ACE into the best computer control agent.</p><br/>

  </div>
  {/* <div className="ProgressGraph">
  <div className="progress-container">
       {days.map((day, index) => {
        const progress = progressData[day] || 0;
        const isUnlocked = unlockedDays[day] || false;

        return (
          <div
            className={`Xyz ${isUnlocked ? "" : "locked"}`}
            key={index}
            title={isUnlocked ? "" : "Complete previous day's topics to unlock"}
          >
            <div
              className="progressbar"
              style={{
                background: `conic-gradient(${isUnlocked ? "green" : "gray"} ${progress * 3.6}deg, #212121 ${progress * 3.6}deg)`,
                opacity: isUnlocked ? 1 : 0.5, // Dim locked days
                filter: isUnlocked ? "none" : "blur(3px)",

              }}
            >
              <span className="title">{progress}%</span>
            </div>
            {!isUnlocked && <div className="lock-icon">🔒</div>}

            <h3>{`Day ${index + 1}`}</h3>
          </div>
        );
      })}
    </div>
    <div className="Graph-Container"><p>Graph</p></div>
  </div> */}
 
    </div>
  );
}
