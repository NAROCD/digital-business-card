// Form.js
import React from "react";

const Form = ({ handleChange, handleSubmit, handleLogoChange }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input type="file" name="logo" onChange={handleLogoChange} />
      <button type="submit">Generate Card</button>
    </form>
  );
};

export default Form;
