import React, { useState } from 'react';
import className from 'classnames';
import './Button.scss';


function Button({ children, color, size }) {
  let toggle = true;
  const [check, setCheck] = useState("A");
  const click = (()=>{
    toggle = !toggle;
    if(toggle === true){
      setCheck("A");
    }
    else {
      setCheck("B");
    }
    console.log(check, toggle);
  })
  return (<>
    <div id='main'>
      <button className={className("Button", size, color)} onClick={click}>
        <span>{children}</span>
      </button>
      <div className='check'><span>{check}</span></div>
    </div>
  </>
  );
}

Button.defaultProps = {
  size:'medium',
  color:"blue",
};

export default Button;