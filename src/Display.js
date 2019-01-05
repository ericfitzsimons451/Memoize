import React, { Component } from 'react';
// import App from './App.js';
import Question from './Question.js'
import './Display.scss'

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questionBank,
      showAllQuestions: true
    }

  }
  render() {
    if (this.state.showAllQuestions) {

    return (
      this.props.questionBank.map((question) => {
        return (
      <main className="main-display">
        <Question questionInfo={question} />
      </main>

          )
      })
      )
    }
  }
}

export default Display;