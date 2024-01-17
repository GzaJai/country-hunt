import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./utils/get_data";

function Game({ incrementScore, decrementScore }) {
  const [apiData, setApiData] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [mainContainerClass, setMainContainerClass] =
    useState("main-container");
    const [newGame, setNewGame] = useState(true)

  useEffect(() => {
    if (apiData == null) {
      fetchData(setApiData);
    }
  }, []);

  const nextQuiz = () => {
    fetchData(setApiData);
    setCorrectAnswer(false);
    setNewGame(true)
    setMainContainerClass("main-container");
  };

  const checkAnswer = (answer, option) => {
    setNewGame(false)
    if (answer == option) {
      setCorrectAnswer(true);
      incrementScore();
      setMainContainerClass("main-container main-container-right");
    } else {
      setCorrectAnswer(false);
      decrementScore();
      setMainContainerClass("main-container main-container-wrong");
    }
  };

  return (
    <div className={mainContainerClass}>
      <h2>What country is it?</h2>
      <div className="img-container">
        <img className="country-flag" src={apiData && apiData.flag} alt="" />
      </div>
      <div className="button-container">
        {apiData &&
          apiData.variants.map((option) => (
            <button
              className="option-button"
              key={option}
              onClick={() => checkAnswer(apiData.answer, option)}
            >
              {option}
            </button>
          ))}
      </div>
      <div className="result-div">
        {correctAnswer ? (
          <>
            <p>¡Perfect!</p>
            <button className="next-button" onClick={() => nextQuiz()}>
              Next <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </>
          
        ): newGame == false &&
            <>
                <p>Wrong answer</p>
            </>
        }
      </div>
    </div>
  );
}

export default Game;
