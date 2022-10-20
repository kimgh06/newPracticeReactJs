import React from 'react';
import './Button.scss';


function Button({ children, bcolor, size }) {
  return (
    <button className="Button"><span>{children}</span></button>
  );
}

Button.defaultProps = {
  size:'medium',
};

export default Button;