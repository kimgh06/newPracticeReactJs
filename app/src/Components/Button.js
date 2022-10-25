import React, { useState } from 'react';
import className from 'classnames';
import './Button.scss';


function Button({ children, color, size, outline, fullwidth }) {
  let toggle = true;
  const [check, setCheck] = useState("OFF");
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
    <div id='ButtonMain'>
      <button className={className("Button", size, color, {outline, fullwidth})} onClick={click}>
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