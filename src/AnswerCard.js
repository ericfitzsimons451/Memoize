import React from 'react';
import './AnswerCard.scss';

function AnswerCard(props) {
  return(
    <div className="answer-card" id={props.questionInfo.id}>
      <h3 className="answer-card--question">{props.questionInfo.id}) {props.questionInfo.question}</h3>
      <h3 className="answer-card--correct-answer">Correct Answer: {props.questionInfo.correctAnswer}</h3>
      <h3 className="answer-card--text">Are you confident about this information?</h3>
      <button className="answer-card--save-button" onClick={props.putInLocalStorage}>Save and Remove from Question Bank</button>
      <h3 className="answer-card--text">Not so confident?  Go back to the question bank.  You can try again later!</h3>
      <button className="answer-card--return-button" onClick={props.returnToDisplayAll}>Return without save</button>
      <a href={props.questionInfo.link} className="answer-card--link" target="_blank" rel="noopener noreferrer">Want More Info?</a>
    </div>
  )
}

export default AnswerCard;