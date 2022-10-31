import React from 'react';
import {Route} from 'react-router-dom';
import About from './com/About';
import Home from './com/Home';
import './App.css';

const App = ()=> {
  return (
    <div>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </div>
  );
}

export default App;
