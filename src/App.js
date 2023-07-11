import React, { useState } from "react";
// import { styled } from "styled-components";
import StartComponents from "./components/StartComponents";
import Gameplay from "./components/Gameplay";

const App = () => {
  const [game, setGame] = useState(false);

  const toggleGamePlay = () => {
    setGame((prev) => !prev);
  };
  return (
    <div>
      {!game ? (
        <StartComponents toggleGamePlay={toggleGamePlay} />
      ) : (
        <Gameplay toggleGamePlay={toggleGamePlay} />
      )}
    </div>
  );
};

export default App;

// const Button = styled.button`
//   background-color: black;
//   padding: 10px;
//   color: #fff;
// `;
