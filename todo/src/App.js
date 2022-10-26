import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <div>hello</div>
    </>
  );
}

export default App;
