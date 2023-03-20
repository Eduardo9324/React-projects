import { useState } from 'react';
import './App.css';
import taskLogo from './imgs/logo-task.png';
/* import Task from './components/Task/Task'; */
import TaksList from './components/List-of-tasks/TaksList';

const App = () => {

  return (
    <div className='App' >
      <div className='task-logo-container' >
        <img
          src={taskLogo}
          className='task-logo'
          alt='task-logo'
          />
      </div>
      <div className='main-list'>
        <h1>Mis Tareas</h1>
        <TaksList />
        {/* <Task text='Aprende react' /> */}
      </div>
    </div>
  );
};

export default App;
