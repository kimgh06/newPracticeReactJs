import React, { useState } from 'react';
import './Button.scss';


function Button({ children, bcolor, size }) {
  let toggle = true;
  const [check, setCheck] = useState("A");
  const click = (()=>{
    toggle = !toggle;
    if(toggle === true){
      setCheck("A");
    }
    else{
      setCheck("B");
    }
    console.log(check);
  })
  return (<>
    <div id='main'>
      <button className="Button" onClick={click}><span>{children}</span></button>
      <div className='check'><span>{check}</span></div>
    </div>
  </>
  );
}

Button.defaultProps = {
  size:'medium',
};

export default Button;