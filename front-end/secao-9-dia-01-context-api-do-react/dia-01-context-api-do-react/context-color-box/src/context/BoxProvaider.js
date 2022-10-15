import React from "react";
import myContext from "./myContext";

class Provider extends React.Component {
  state = {
    corlors: ['blue', 'red', 'yellow'],
    colorIndex: 0,
  }

  nextColor = () => {
    const { corlors, colorIndex } = this.state;
    if (colorIndex < corlors.length - 1) {
      this.setState( (prevState) => ({ colorIndex: prevState.colorIndex + 1 }))
    } else {
      this.setState({ colorIndex: 0 })
    }
  }
    render() {
      const context = { 
        ...this.state,
        nextColor: this.nextColor,
      };
      const { children } = this.props;
        return(
          <myContext.Provider value={ context } >
            { children }
          </myContext.Provider>
      );
    }
}

export default Provider;
