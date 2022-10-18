import React, {Component} from 'react';

class Hello extends Component{
  static defaultProps ={
    name: "none",
  }
  render() {
    const {color, name, isSpecial} = this.props;
      return (
        <div style={{color}}>
          {isSpecial && <b>*</b>}
          hello, {name}
        </div>
      );
  }
}

export default Hello;