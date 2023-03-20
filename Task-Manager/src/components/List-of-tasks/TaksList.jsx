import './TaksList.css';
import React, { useState } from 'react';
// Importa aqui los componentes
import Form from '../Form/Form';
import Task from '../Task/Task';

const TaksList = () => {
  const [tasks, setTasks] = useState([]);

  // Funsionalidad para agregar una tarea
  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask);
    };
  };
  
  // Esta funsion elimina una tarea
  const deleteTask = (id) => {
    const updatedTask = tasks.filter((e) => e.id !== id);
    setTasks(updatedTask);
  };


  const completeTask = (id) => {
    const updatedTask = tasks.map((e) => {
      if (e.id === id) {
        e.complete = !e.complete;
      }
      return e;
    });
    setTasks(updatedTask);
  };


  return (
    <>
      <Form onSubmit={addTask} />
      <div className='taks-list-container' >
        {
          tasks.map((e) => 
            <Task
              key={e.id}
              id={e.id}
              text={e.text}
              complete={e.complete}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  );
};

export default TaksList;