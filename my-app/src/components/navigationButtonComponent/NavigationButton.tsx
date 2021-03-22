import React from 'react';
import './navigationButton.css';

function NavigationButton(props: any) {
  return (
    <button className="navigationButton" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default NavigationButton;
