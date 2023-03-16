import './Button.css';
import React from "react";


const Button = ({ text, isButtonClick, clickCount }) => {
  return (
    /* Asigna la clase con un operador ternario */
    <button
      className={isButtonClick ? "button-click" : "button-reset"}
      onClick={clickCount}
    >
      {text}
    </button>
  );
};

export default Button;