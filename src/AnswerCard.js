import React from 'react';
import './AnswerCard.scss';

function AnswerCard(props) {
  return(
    <div className="answer-card" id={props.questionInfo.id}>
      <h3 className="answer-card--question">{props.questionInfo.question}</h3>
      <h3 className="answer-card--correct-answer">Correct: {props.questionInfo.correctAnswer}</h3>
      <a href={props.questionInfo.link} className="answer-card--link" target="_blank" rel="noopener noreferrer">More Info</a>
      <button onClick={props.putInLocalStorage}>Store Answer For Later</button>
    </div>
  )
}

export default AnswerCard;