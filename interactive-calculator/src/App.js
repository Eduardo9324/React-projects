import './App.css';
import calculatorLogo from './imgs/logo-calculator.jpg';

const App = () => {
  return (
    <div className='App'>
      <div className='matematicas-logo-content' >
        <img className='calculator-logo' src={calculatorLogo} alt='logo-calculadora' />
      </div>
    </div>
  );
};

export default App;
