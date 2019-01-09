import React, { Component } from 'react';
import Question from './Question.js'
import AnswerCard from './AnswerCard.js'
import IncorrectAnswerPopup from './IncorrectAnswerPopup.js'
import './main.scss'

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAllQuestions: true,
      displayAnswer: false,
      currentAnswerToDisplay: null,
      showIncorrectAnswerPopup: false
    }
  }

  putInLocalStorage = () => {
    let itemsForStorage;
    if (localStorage.length === 0) {   
      itemsForStorage = {[this.state.currentAnswerToDisplay.id]: true}
      localStorage.setItem("correctAnswers", JSON.stringify(itemsForStorage))
    } else if (localStorage.length > 0) {    
      itemsForStorage = JSON.parse(localStorage.getItem("correctAnswers"))
      itemsForStorage[this.state.currentAnswerToDisplay.id] = true
      localStorage.setItem("correctAnswers", JSON.stringify(itemsForStorage))
    }
    this.props.setAnsweredQuestionsInState(itemsForStorage)
    this.setState({currentAnswerToDisplay: null, showAllQuestions: true, displayAnswer: false})
  }

  verifyAnswer = (event) => {
    let identifier = event.target.parentElement.id
    let selectedQuestion = this.props.questionBank.find((question) => {
      return question.id == identifier   
    })
    if (event.target.innerText !== selectedQuestion.correctAnswer) {
      this.setState({displayAnswer: false, currentAnswerToDisplay: null, showAllQuestions: false, showIncorrectAnswerPopup: true})
    } else {
      this.setState({displayAnswer: true, currentAnswerToDisplay: selectedQuestion, showAllQuestions: false})
    }
  }

  returnToDisplayAll = () => {
    this.setState({displayAnswer: false, currentAnswerToDisplay: null, showAllQuestions: true, showIncorrectAnswerPopup: false})
  }

  render() {
    if (this.state.showAllQuestions) {
      return (
        <main className="main-display">    
          {
            this.props.questionBank.map((question) => {
              return <Question 
                      questionInfo={question}
                      verifyAnswer={this.verifyAnswer}
                      key={question.id} />
            })
          }
        </main> 
      )
    } else if (this.state.displayAnswer === false && this.state.showAllQuestions === false && this.state.showIncorrectAnswerPopup === true) {
        return(
          <main className="main-display">
            <IncorrectAnswerPopup 
              returnToDisplayAll={this.returnToDisplayAll}
              questionInfo={this.state.currentAnswerToDisplay}
             />
          </main>
          )
    } else if (this.state.showAllQuestions === false && this.state.displayAnswer === true) {
      return (
        <main className="main-display">
          <AnswerCard questionInfo={this.state.currentAnswerToDisplay} putInLocalStorage={this.putInLocalStorage} 
            returnToDisplayAll={this.returnToDisplayAll}/>
        </main>
      )
    } 
  } 
}

export default Display;