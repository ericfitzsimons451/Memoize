import React from 'react';
import './reset.css'
import './Question.scss';

function Question(props){
  return (
    <div className="question-card" id={props.questionInfo.id}>
      <h2 className="question-card--topic">{props.questionInfo.question}</h2>
      <h3 className="answer-selection-one">{props.questionInfo.answer1}</h3>
      <h3 className="answer-selection-two">{props.questionInfo.answer2}</h3>
      <h3 className="answer-selection-three">{props.questionInfo.answer3}</h3>
      <button onClick={props.showAnswer} className="submit-answer-button" type="submit" >Check Answer</button>
    </div>
  )
}

export default Question;