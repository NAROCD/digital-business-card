// Card.js
import React from "react";
import QRCode from "qrcode.react";

const Card = ({
  isFlipped,
  handleCardClick,
  vCardInfo,
  name,
  title,
  company,
  logo,
}) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      {isFlipped ? (
        <div className="back">
          <div className="text-row">
            <h1 className="text-item">{name}</h1>
            <h2 className="text-item">{title}</h2>
            <h3 className="text-item">{company}</h3>
          </div>
          <div className="qr-row">
            <QRCode value={vCardInfo} />
          </div>
        </div>
      ) : (
        <div className="front">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      )}
    </div>
  );
};

export default Card;
