import "./App.css";
import React, {Component} from 'react';

function hello(){
  const div = document.createElement("div");
  div.innerText = "hello";
  document.body.appendChild(div);
}

function App(props) {
  return (
    <body>
      <div id="hello">
        <button onClick={hello}>hello</button>
      </div>
    </body>
  );
}

export default App;