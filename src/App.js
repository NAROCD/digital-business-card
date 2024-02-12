// App.js
import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="front">
          <img src={"/logo.png"} alt="Logo" className="logo" />
        </div>

        <div className="back">
          <h2>Daniel Narovec</h2>
          <p>Junior SAP Developer</p>
          <p>Sabris Consulting s.r.o.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
