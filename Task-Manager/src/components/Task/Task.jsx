import './Task.css';
import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const Task = ({ text, complete }) => {
  return (
    /* Aqui se asigna una clase de manera condicional, se puede incluir dos clases mediante un espacio */
    <div className={complete ? "Task-container complete" : "Task-container"} >
      <div className="text-task">{text}</div>
      <div className="task-container-icon" >
        <AiFillCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;