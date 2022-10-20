import React from 'react';
import './Button.scss';
const hello = (()=>{
  console.log("hello");
})

function Button({ children }) {
  return (
    <button className="Button" onClick={hello}>{children}</button>
  );
}

export default Button;