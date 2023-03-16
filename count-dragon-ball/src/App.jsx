import './App.css';
/* Forma de importar imagenes */
import Button from './components/Button/Button.jsx';
import Count from './components/Count/Count.jsx';
import dbLogo from './imgs/db-logo.png';
import { useState } from "react";

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => setClickCount(clickCount + 1);

  const resetCount = () => setClickCount(0);

  return (
    <div className="App">
      <div className="db-logo-contenedor">
        {/* Procedo a insertar una imagen */}
        <img className="db-logo" src={dbLogo} alt="Logo de Dragon Ball" />
      </div>
      <div className="contenedor-contador">
        <Count count={clickCount} />
        <Button
          text="Clicks"
          isButtonClick={true}
          clickCount={() => incrementClickCount()}
        />
        <Button
          text="Reset"
          isButtonClick={false}
          clickCount={() => resetCount()}
        />
      </div>
    </div>
  );
};

export default App;
