import React, { useState } from 'react';
import className from 'classnames';
import './Button.scss';


function Button({ children, color, size }) {
  const [check, setCheck] = useState("OFF");
  let toggle = true;
  const click = (()=>{
    if(toggle === true){
      setCheck("ON");
    }
    else {
      setCheck("OFF");
    }
    toggle = !toggle;
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