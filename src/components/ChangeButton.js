import "../styles/styles.css";
import React from "react";

export const ChangeButton = ({ handleChange }) => {
  return (
    <button className="changeButton" onClick={handleChange}>
      ⟷
    </button>
  );
};
