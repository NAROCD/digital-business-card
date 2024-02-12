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
          <div className="text-row">
            <h2 className="text-item">Daniel Narovec</h2>
            <p className="text-item">Junior SAP Developer</p>
            <p className="text-item">Sabris Consulting s.r.o.</p>
          </div>

          <div className="qr-row">
            <QRCode
              value={`mailto:example@example.com?subject=Contact&body=Email: example@example.com%0APhone: 123456789`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
