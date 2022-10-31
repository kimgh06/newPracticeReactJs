import React from 'react';
import {Route, Routes} from 'react-router-dom';
import About from './com/About';
import Home from './com/Home';
import './App.css';

const App = ()=> {
  return (
    <Routes>
      <Route path='/' element={Home}/>
      <Route path='/about' element={About}/>
    </Routes>
  );
}

export default App;
