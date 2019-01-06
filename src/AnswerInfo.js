import React from 'react';
import './AnswerInfo.scss';

function AnswerInfo(props) {
  return(
    <div className="answer-card">
      <h3>{props.questionInfo.correctAnswer}</h3>
      <a href={props.questionInfo.link}>More Info</a>
      <button>Store Answer For Later</button>
    </div>
  )
}

export default AnswerInfo;