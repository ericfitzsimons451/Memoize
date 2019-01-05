import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      selectedCategory: '',
      isLoading: true    
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





  render() {
    if (this.state.isLoading) {
      return (
        <div>
        <p>Loading</p>
        </div>
        )
    } else {
      return (
        <div className="App">       
          <header className="App-header">
            <h1 className="App-title">Mod 2 Study Guide</h1>
            <h3 className="instructions">Select some questions!</h3>
            <Display questionBank={this.state.data}/>
          </header>
        </div>
      );
    }
  }
}

export default App;
