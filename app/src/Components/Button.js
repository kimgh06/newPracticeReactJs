import React from 'react';
import './Button.scss';


function Button({ children, size }) {
  
  return (
    <button className="Button">{children}</button>
  );
}

Button.defaultProps = {
  size:'medium',
};

export default Button;