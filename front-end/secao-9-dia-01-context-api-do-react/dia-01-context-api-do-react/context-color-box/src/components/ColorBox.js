// ./components/ColorBox.js
import React from 'react';
import myContext from '../context/myContext';
import '../styles/box.css';
class ColorBox extends React.Component {
  render() {
    const { corlors, colorIndex, nextColor } = this.context;
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: corlors[colorIndex]} }
        onClick={ () => nextColor() }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = myContext;

export default ColorBox;