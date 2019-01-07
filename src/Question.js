import React from 'react';
import './reset.css'
import './Question.scss';

function Question(props) {
  return (
    <div className="question-card" id={props.questionInfo.id}>
      <h2 className="question-card--topic">{props.questionInfo.question}</h2>
      <h3 className="answer-selection-one" onClick={props.verifyAnswer}>{props.questionInfo.answer1}</h3>
      <h3 className="answer-selection-two" onClick={props.verifyAnswer}>{props.questionInfo.answer2}</h3>
      <h3 className="answer-selection-three" onClick={props.verifyAnswer}>{props.questionInfo.answer3}</h3>
    </div>
  )
}

export default Question;