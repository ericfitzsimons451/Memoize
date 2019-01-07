import React, { Component } from 'react';
import Question from './Question.js'
import AnswerCard from './AnswerCard.js'
import './reset.css'
import './Display.scss'

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questionBank,
      showAllQuestions: true,
      displayAnswer: false,
      currentAnswerToDisplay: null
    }
  }

  displayAnswer = (event) => {
    let identifier = event.target.parentElement.id
    let selectedAnswer = this.state.questions.find((question) => {
      return question.id == identifier   
    })
    this.setState({displayAnswer: true,currentAnswerToDisplay: selectedAnswer, showAllQuestions: false})
  }

  putInLocalStorage = (event) => {
    event.preventDefault();
    console.log(event.target.parentElement)

  }

  render() {
    if (this.state.showAllQuestions) {

    return (
          <main className="main-display">
          
            {
              this.props.questionBank.map((question) => {
                return <Question 
                        questionInfo={question}
                        showAnswer={this.displayAnswer} />
              })
            }

          </main> 
        )
    } else if (this.state.showAllQuestions === false && this.state.displayAnswer === true) {

      return (
        <main className="main-display">
             <AnswerCard questionInfo={this.state.currentAnswerToDisplay} saveCard={this.putInLocalStorage} />
        </main>
      )
    }
  }
}

export default Display;