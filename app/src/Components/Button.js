import React from 'react';
import './Button.scss';


function Button({ children, bcolor, size }) {
  let toggle = true;
  let check;
  const click = (()=>{
    toggle = !toggle;
    if(toggle === true){
      check = "A";
    }
    else{
      check = "B";
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