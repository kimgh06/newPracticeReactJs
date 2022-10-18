import React, {Component} from 'react';

class Hello extends Component{
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


Hello.defaultProps = {
  name: '이름 없음',
};

export default Hello;