import "./App.css";
import React, {Component} from 'react';

function hello(){
  const div = document.createElement("div");
  div.innerText = "hello";
  document.body.appendChild(div);
}

function App(props) {
  return (
    <div>
      <button onClick={hello}>hello</button>
    </div>
  );
}

export default App;