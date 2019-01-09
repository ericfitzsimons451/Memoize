import React from 'react';
import './main.scss'

function IncorrectAnswerPopup(props) {
  return(
    <div className="popup--container">
      <h2 className="popup--title">Your answer was not correct!</h2>
      <h3 className="popup-text">Sorry!  Please try again.</h3>
      <button className="popup--button" type="button" onClick={props.returnToDisplayAll}>Return to Question List</button>
    </div>
    )
}

export default IncorrectAnswerPopup;