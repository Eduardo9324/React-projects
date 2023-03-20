import './Task.css';
import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const Task = ({ id, text, complete, completeTask, deleteTask }) => {
  return (
    /* Aqui se asigna una clase de manera condicional, se puede incluir dos clases mediante un espacio */
    <div className={complete ? "Task-container complete" : "Task-container"} >
      <div
        className="text-task"
        onClick={() => completeTask(id)} >
        {text}
      </div>
      <div
        className="task-container-icon"
        onClick={() => deleteTask(id)} >
        <AiFillCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;