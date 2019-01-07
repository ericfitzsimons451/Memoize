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
    }
  }

  displayAnswer = (event) => {
    this.setState({showAllQuestions: false, displayAnswer: true})
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
          {
            this.props.questionBank.map((question) => {
              return <AnswerCard 
                      questionInfo={question}
                      saveCard={this.putInLocalStorage} />
            })
          }
        </main>
      )
    }
  }
}

export default Display;