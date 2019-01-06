import React from 'react';
import './AnswerCard.scss';

function AnswerInfo(props) {
  return(
    <div className="answer-card">
      <h3 className="answer-card--question">{props.questionInfo.question}</h3>
      <h3 className="answer-card--correct-answer">Correct: {props.questionInfo.correctAnswer}</h3>
      <a href={props.questionInfo.link} className="answer-card--link">More Info</a>
      <button>Store Answer For Later</button>
    </div>
  )
}

export default AnswerInfo;