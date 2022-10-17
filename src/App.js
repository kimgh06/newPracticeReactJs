/* eslint-disable */

import "./App.css";
import React, {Component} from 'react';
import { render } from "react-dom";

class App extends Component{
  render(){
    return(
      <ul>
        <li>
          hello
        </li>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </ul>
    );
  }
}
    
export default App;