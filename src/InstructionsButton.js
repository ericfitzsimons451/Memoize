import React from 'react';
import './InstructionsButton.scss';

function InstructionsButton(props) {
  return(
    <div className="instructions-style-div">
      <button className="instructions-button" type="button" onClick={props.displayInstructions}>Click for Instructions</button>
    </div>
  )
}



export default InstructionsButton;