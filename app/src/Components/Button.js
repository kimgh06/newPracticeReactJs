import React from 'react';
import './Button.scss';


function Button({ children, bcolor, size }) {
  let toggle = true;
  const click = (()=>{
    toggle = !toggle;
    console.log(toggle);
  })
  return (
    <button className="Button" onClick={click}><span>{children}</span></button>
  );
}

Button.defaultProps = {
  size:'medium',
};

export default Button;