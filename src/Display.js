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
      currentAnswerToDisplay: null,
    }
  }

  // displayAnswerCard = (event) => {
  //   let identifier = event.target.parentElement.id
  //   let selectedAnswer = this.state.questions.find((question) => {
  //     return question.id == identifier   
  //   })
  //   this.setState({displayAnswer: true,currentAnswerToDisplay: selectedAnswer, showAllQuestions: false})
  // }

  putInLocalStorage = (event) => {
    event.preventDefault();
    if (localStorage.length === 0) {   
      let array = [this.state.currentAnswerToDisplay.id]
      localStorage.setItem("correctAnswers", JSON.stringify(array))
    } else if (localStorage.length > 0) {    
        let retrieved = JSON.parse(localStorage.getItem("correctAnswers"))
        retrieved.push(this.state.currentAnswerToDisplay.id)
       localStorage.setItem("correctAnswers", JSON.stringify(retrieved))
    }
    this.setState({currentAnswerToDisplay: null, showAllQuestions: true, displayAnswer: false})
  }

  verifyAnswer = (event) => {
    let identifier = event.target.parentElement.id
    let selectedAnswer = this.state.questions.find((question) => {
      return question.id == identifier   
    })
    if (event.target.innerText !== selectedAnswer.correctAnswer) {
      alert('Incorrect.  Try again')
    } else {
      this.setState({displayAnswer: true,currentAnswerToDisplay: selectedAnswer, showAllQuestions: false})
    }
  }
  // checkLocalStorage = () => {
  //   console.log('checkStorage', localStorage.correctAnswers)
  //   if (localStorage.correctAnswers.length === 0) {
  //     let found = this.state.questions.forEach((question) => {
  //       localStorage.correctAnswers.forEach((answer) => {
  //         if (answer == question.id) {
  //           return question
  //         }
  //       })
  //       console.log('found', found)
  //       return found
  //     })
  //   }
  

  render() {
    // let questions = this.checkLocalStorage();
    if (this.state.showAllQuestions) {

    return (
          <main className="main-display">    
            {
              this.props.questionBank.map((question) => {

                return <Question 
                        questionInfo={question}
                        // showAnswer={this.displayAnswerCard}
                        verifyAnswer={this.verifyAnswer}
                        key={question.id} />
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