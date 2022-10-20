import React from 'react';
import './App.css';
import Button from "../src/Components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button bcolor="white" children = 'BUTTON'/>
      </div>
    </div>
  );
}

export default App;