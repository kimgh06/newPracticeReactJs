import "./App.css";
import React, {Component} from 'react';

class Shape{
  static create(x, y){
    return new Shape(x, y);
  }
  name = 'Shape';
  constructor (x, y){
    this.move(x,y);
  }
  move(x,y){
    this.x = x;
    this.y = y;
  }
  area(){
    return 0;
  }
}
let c = new Shape(0,0);

function App(props) {
  return (
    <div>
      어딜 보시는 거죠 그건 제 작업물입니다만?
    </div>
  );
}

export default App;