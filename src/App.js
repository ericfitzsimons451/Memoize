import React, { Component } from 'react';
import logo from './logo.svg';
import Display from './Display.js';
import InstructionsButton from './InstructionsButton.js';
import Instructions from './Instructions.js';
import './reset.css';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      isLoading: true,
      showInstructions: false   
    }
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/mod2information')
    .then(response => response.json())
    .then(data => {
      this.setState({data: data.mod2information, isLoading: false})
    })
    .catch(err => console.log(err))
  }

  displayInstructions = (event) => {
    this.setState({showInstructions: true})
  }

  returnToMainDisplay = ()=>  {
    this.setState({showInstructions: false})
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
        )
    } else if (this.state.isLoading === false && this.state.showInstructions === true) {
        return (
          <Instructions returnToMainDisplay={this.returnToMainDisplay} />
        )
    } else {
      return (
        <div className="App">       
          <header className="App-header">
            <h1 className="App-title">Mod 2 Study Guide</h1>
            <InstructionsButton displayInstructions={this.displayInstructions} />
            <Display questionBank={this.state.data} />
          </header>
        </div>
      );
    }
  }
}

export default App;
