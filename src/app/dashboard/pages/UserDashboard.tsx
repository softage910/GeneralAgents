"use client";
import "../pages/UserDashboard.css";

export default function Dashboard() {
return (
<div className="Progress-Section">

  <div className="ProgressbarContent">
    <br/>
    <p>Welcome to the Ace Data Collection Project! Our mission is to gather clean, precise recordings of tasks to train Ace, our computer control agent. As a Domain Expert, you&apos;ll play a key role in shaping Ace into the best computer control agent.</p><br/>

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

  <div className="Onboarding-Content">
    <div className="Content-Video">
        {/* <h1>(Space For Onboarding Video)</h1> */}
        <div style={{position: "relative", paddingTop:"56.25%"}}><iframe src="https://iframe.mediadelivery.net/embed/394091/e8800de5-1a8d-4e3e-b6f1-bb3bccf108cb?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{ position: "absolute", top: "0", height:"100%", width: "100%"}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"></iframe></div>
    </div>
  </div>
</div>
  );
}
