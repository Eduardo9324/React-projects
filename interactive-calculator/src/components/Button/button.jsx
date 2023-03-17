import './button.css';
import React from 'react';

const Button = (props) => {

  const isOperator = (value) => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return (
    <div className={ `button-container ${isOperator(props.children) ? 'operator' : '' }`.trimEnd() } >
      {props.children}
    </div>
  );
};

export default Button;