import React from 'react';
import './Instructions.scss';

function Instructions(props) {
  return(
    <article className="instructions-display">
            <h2 className="instructions-header">How to Use This App</h2>
            <p className="instructions-article">a;lskdjfals;dkjfa;sldkfjas;ldkfjlsa;kdfj;alskdfja;slkdfjlasdfj</p>
            <button type="button" className="exit-instructions-button" onClick={props.returnToMainDisplay}>Let's Go!</button>
          </article>
    )
}

export default Instructions;