import React from "react";
import dices from "../assets/dices/dices 1.png"; 
import "../Styles/startComponents.scss";

const StartComponents = ({toggleGamePlay}) => {
  return (
    <div className="container">
      <div className="c1">
        <img src={dices} alt="" />
      </div>
      <div className="c2">
        <h1>Dice Game</h1>
        <button onClick={toggleGamePlay}>Play Now</button>
      </div>
    </div>
  );
};

export default StartComponents;

 