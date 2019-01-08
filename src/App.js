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
      correctlyAnsweredQuestions: JSON.parse(localStorage.getItem('correctAnswers'))
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

  getUnansweredQuestions = () => {
    let correctQuestionIds = this.state.correctlyAnsweredQuestions ? Object.keys(this.state.correctlyAnsweredQuestions) : []
    let filteredQuestions = this.state.data.filter((question) => {
      return !correctQuestionIds.includes(question.id.toString())
    })
    return filteredQuestions
  }

  setAnsweredQuestionsInState = (obj) => {
    this.setState({correctlyAnsweredQuestions: obj})
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
          <div className="App">       
            <header className="App-header">
            <Instructions returnToMainDisplay={this.returnToMainDisplay} />
            <h1 className="App-title">Mod 2 Study Guide</h1>
            <InstructionsButton displayInstructions={this.displayInstructions} />
            <Display questionBank={this.getUnansweredQuestions()}
                     setAnsweredQuestionsInState={this.setAnsweredQuestionsInState}
                     key={this.state.data.id} />
          </header>
        </div>
      )
    } else {
      return (
        <div className="App">       
          <header className="App-header">
            <h1 className="App-title">Mod 2 Study Guide</h1>
            <InstructionsButton displayInstructions={this.displayInstructions} />
           
            <Display questionBank={this.getUnansweredQuestions()}
                     setAnsweredQuestionsInState={this.setAnsweredQuestionsInState}
                     key={this.state.data.id} />
          </header>
        </div>
      );
    }
  }
}

export default App;
