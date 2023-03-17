import './App.css';
import calculatorLogo from './imgs/logo-calculator.jpg';
import Button from './components/Button/button';

const App = () => {
  return (
    <div className="App">
      <div className="matematicas-logo-content">
        <img
          className="calculator-logo"
          src={calculatorLogo}
          alt="logo-calculadora"
        />
      </div>
      <div className="calculator-container">
        <div className="fila">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>X</Button>
        </div>
        <div className="fila">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>/</Button>
        </div>
        <div className="fila">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>+</Button>
        </div>
        <div className="fila">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>-</Button>
        </div>
        <div className="fila"></div>
      </div>
    </div>
  );
};

export default App;
