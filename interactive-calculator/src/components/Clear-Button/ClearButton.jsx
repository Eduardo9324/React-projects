import './ClearButton.css';
import React from 'react';

const ClearButton = (props) => {
  return (
    <div className='clear-button' onClick={props.handleClear} >
      {props.children}
    </div>
  );
};

export default ClearButton;