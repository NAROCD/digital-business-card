// App.js
import React, { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Form from "./components/form";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const vCardInfo = `BEGIN:VCARD
VERSION:3.0
N:${formData.name.split(" ")[1]};${formData.name.split(" ")[0]};;;
FN:${formData.name}
ORG:${formData.company};
TEL;TYPE=work,voice;VALUE=uri:tel:${formData.phone}
EMAIL:${formData.email}
END:VCARD
`;

  return (
    <div className="App">
      {!isSubmitted && (
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      )}
      {isSubmitted && (
        <Card
          isFlipped={isFlipped}
          handleCardClick={handleCardClick}
          vCardInfo={vCardInfo}
          name={formData.name}
          title={formData.title}
          company={formData.company}
        />
      )}
    </div>
  );
}

export default App;
