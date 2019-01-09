import React from 'react';
import './main.scss'

function Instructions(props) {
  return(
    <article className="instructions-display">
            <h2 className="instructions-header">How to Use This App</h2>
            <p className="instructions-article">Click on any of the cards to display the correct answer.</p>
            <p className="instructions-article">After viewing the correct answer, click the button to return to the main display.</p>
            <button type="button" className="exit-instructions-button" onClick={props.returnToMainDisplay}>Let's Go!</button>
          </article>
    )
}

export default Instructions;