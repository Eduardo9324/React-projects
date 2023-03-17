import './App.css';
import calculatorLogo from './imgs/logo-calculator.jpg';
import Button from './components/Button/button';
import Screen from './components/Screen/Screen';
import ClearButton from './components/Clear-Button/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const App = () => {
  
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const resultCalculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Se requieren valores a evaluar.")
    }
  };

  return (
    <div className="App">
      <div className="matematicas-logo-content" >
        <img
          className="calculator-logo"
          src={calculatorLogo}
          alt="logo-calculadora"
        />
      </div>
      <div className="calculator-container" >
        <Screen input={input} />
        <div className="fila">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="fila">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button handleClick={resultCalculate}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <ClearButton handleClear={clearInput}>Reset</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
