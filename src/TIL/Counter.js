import React, { useReducer, Component } from 'react';

class Counter extends Component{
    handleIncrease(){
        console.log("increase");
    }
    handledecrease(){
        console.log("decrease");
    }
    render(){
        return (
            <div>
                <h1>0</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handledecrease}>-1</button>
            </div>
        );
    }
}

export default Counter;