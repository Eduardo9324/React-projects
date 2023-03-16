import './Count.css';
import React from "react";

const Count = ({ count }) => {
  return (
    <div className="count" >
      {count}
    </div>
  );
};

export default Count;