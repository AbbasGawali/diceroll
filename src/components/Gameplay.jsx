import React, { useState } from "react";
import "../Styles/GamePlay.scss"; 
const Gameplay = ({ toggleGamePlay }) => {
  const numarr = [1, 2, 3, 4, 5, 6];
  const [selectNumber, setSelectNumber] = useState(0);
  const [cdice, setCDice] = useState(1);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.ceil(Math.random() * (max - min + min));
  };
  const rollDice = () => {
    if (selectNumber === 0) {
      return setErr(true);
    }
    let number = generateRandomNumber(1, 6);
    setCDice(number);
    setErr(false);
    // console.log(number);
    if (number === selectNumber) {
      setScore(score + 2);
    } else {
        setScore(score - 1);
      setSelectNumber(0);
    }
  };
  // console.log(`selected no : ${selectNumber} dice no : ${cdice}`);

  return (
    <div className="gcontainer">
      <h3 id="sph3">{err ? "You have not selected any number" : ""}</h3>
      <div className="gs">
        <div className="g1">
          <h1>{score}</h1>
          <h4>Total Score</h4>
        </div>
        <div className="g2">
          <div className="nums">
            {numarr.map((element, index) => (
              <h3
                // isSelected={element === number}
                onClick={() => setSelectNumber(element)}
                key={index}
              >
                {element}
              </h3>
            ))}
          </div>
          <h4>Select Number</h4>
        </div>
      </div>
      <div className="gdice">
        <img
          src={require(`../assets/dices/dice_${cdice}.png`)}
          onClick={() => rollDice()}
          alt=""
        />

        <p>Click On Dice To Roll</p>
        <button id="sp-btn" onClick={() => setScore(0)}>
          Reset Score
        </button>

        <button onClick={() => setVisible(!visible)}>
          {!visible ? "Show Rules" : "Hide Rules"}
        </button>
      </div>
      {visible ? (
        <div className="info">
          <div className="data">
            <h3>How to play dice game</h3>
            <p>
              Select any number <br />
              Click on dice image <br />
              after click on dice if selected number is equal to dice number you
              will get some point as dice if you get wrong guess then 1 point
              will be dedcuted
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gameplay;
