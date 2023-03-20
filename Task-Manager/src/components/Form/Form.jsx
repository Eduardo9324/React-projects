import './Form.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [input, setInput] = useState('');

  // Esta funsion maneja todos los cambios en el input donde escribe el usuario
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  /* Esta funsion se ejecuta cuando se envie el formulario */
  const handleSend = (e) => {
    // Evita que se vuelva a cargar toda la aplicacion cuando se envia el formulario
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    };
    props.onSubmit(newTask);
  };

  return (
    <form
      className='task-form'
      onSubmit={handleSend}
    >
      <input
        className='task-input'
        type='text'
        placeholder='Escribe tu tarea'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button' >
        Agregar Tarea
      </button>
    </form>
  );
};

export default Form;