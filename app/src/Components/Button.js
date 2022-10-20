import React from 'react';
import './Button.scss';


function Button({ children, bcolor, size }) {
  const click = (()=>{
    console.log(bcolor);
  })
  return (
    <button className="Button" onClick={click}><span>{children}</span></button>
  );
}

Button.defaultProps = {
  size:'medium',
};

export default Button;