    // src/App.js
    import React from 'react';
    
    class App extends React.Component {
      constructor() {
        super()
        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);

        this.state = {
          btnOne: 0,
          btnTwo: 0,
          btnThree: 0
        }
      }
      
      handleButtonOne() {
        this.setState((stateAnterior, _props) => ({
          btnOne: stateAnterior.btnOne +1,
        }));
      }
      
      handleButtonTwo() {
        this.setState((statAnter, _props) => ({
          btnTwo:statAnter.btnTwo +1,
        }))
      }

      handleButtonThree() {
        this.setState((statAnter, _props) => ({
          btnThree:statAnter.btnThree +1,
        }))
      }
      render() {
        console.log('log this render', this);
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1 - {this.state.btnOne}</button>
            <button onClick={ this.handleButtonTwo }>Botão 2 - {this.state.btnTwo}</button>
            <button onClick={ this.handleButtonThree }>Botão 3 - {this.state.btnThree}</button>
          </div>
        );
      }
    }

    export default App;