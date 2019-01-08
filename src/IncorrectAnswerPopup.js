import React from 'react';
import './IncorrectAnswerPopup.scss';

function IncorrectAnswerPopup(props) {
  return(
    <div className="popup-container">
      <h2 className="popup-title"></h2>
      <h3>Sorry!  That answer is not correct.  Please try again.</h3>
      <button className="popup-button" type="button" onClick={props.returnToDisplayAll}>Return to Question List</button>
    </div>
    )
}

export default IncorrectAnswerPopup;