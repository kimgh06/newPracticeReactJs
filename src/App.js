/* eslint-disable */
import "./App.css";
import React, {useRef , useState, useMemo, useCallback, useReducer} from 'react';
import User from "./TIL1/User";
function App() {
  const user = {
    id: 1,
    username: 'velopert'
  };
  return (
    <User user={user}/>
  );
}

export default App;