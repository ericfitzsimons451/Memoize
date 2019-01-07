import React, { Component } from 'react';
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
      showInstructions: false,
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
    event.preventDefault()
    this.setState({showInstructions: true})
  }

  returnToMainDisplay = () =>  {
    this.setState({showInstructions: false})
  }

  // pullStoredCards = () => {
  //   let keysForStorage = Object.keys(localStorage)
  //   let storedItems = []
  //   for (var i = 1; i < keysForStorage.length; i++) {

  //   storedItems.push(JSON.parse(localStorage.getItem(keysForStorage[i])))

  //   this.setState({storedObjects: storedItems})
  //   }
  // }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
        )
    } else if (this.state.isLoading === false && this.state.showInstructions === true) {
        return (
          <div className="App">       
            <header className="App-header">
            <Instructions returnToMainDisplay={this.returnToMainDisplay} />
            <h1 className="App-title">Mod 2 Study Guide</h1>
            <InstructionsButton displayInstructions={this.displayInstructions} />
            <Display questionBank={this.state.data} />
          </header>
        </div>
        )
    } else {
      return (
        <div className="App">       
          <header className="App-header">
            <h1 className="App-title">Mod 2 Study Guide</h1>
            <InstructionsButton displayInstructions={this.displayInstructions} />
           
            <Display questionBank={this.state.data}
                     key={this.state.data.id} />
          </header>
        </div>
      );
    }
  }
}

export default App;
