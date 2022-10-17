import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) =>{
        setText(e.target.value);
    }
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;