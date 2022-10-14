import "./App.css";
import React, {Component} from 'react';

function hello(){
  const div = document.createElement("div");
  div.innerText = "hello";
  document.querySelector("#hello").appendChild(div);
}

function iii(){
  alert("a;slkjfa;sldkj");
}

function App(props) {
  return (
    <div id="hello">
      <button onClick={hello}>hello</button>
      <button onClick={iii}>iii</button>
    </div>
  );
}

export default App;