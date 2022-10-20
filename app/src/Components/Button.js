import React, { useState } from 'react';
import './Button.scss';
const hello = (()=>{
  console.log("hello");
})

function Button({ children, bcolor, size }) {
  const [style, setStyle] = useState({
    color: bcolor,
  })
  return (
    <button className="Button" style={style} onClick={hello}>{children}</button>
  );
}

Button.defaultProps = {
  size:'medium',
};

export default Button;