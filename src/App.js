import "./App.css";
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import { render } from "react-dom";

function hello(){
  return "a";
}

function App(props) {
  return (
    <span>{hello()}</span>
  );
}
    
export default App;