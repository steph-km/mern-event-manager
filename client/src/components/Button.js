import React from "react";
import "./Button.css"; // Assuming you have a CSS file for styling

const Button = ({ label, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
