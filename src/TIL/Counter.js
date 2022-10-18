import React, { useReducer, Component } from 'react';

class Counter extends Component{
    state = {
        number:0,
        fixed:1,
    }
    handleIncrease = () => {
        this.setState({
            number : this.state.number + 1
        });
    }
    handleDecrease = () => {      
        this.setState({
            number : this.state.number - 1
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>{this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;