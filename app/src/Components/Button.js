import React, { useState } from 'react';
import './Button.scss';
const hello = (()=>{
  console.log("hello");
})

function Button({ children, bcolor }) {
  const [style, setStyle] = useState({
    color: bcolor,
  })
  return (
    <button className="Button" style={style} onClick={hello}>{children}</button>
  );
}

export default Button;