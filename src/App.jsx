import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./Game";
import InfoModal from "./components/InfoModal";
import MoreInfo from "./components/MoreInfo";

function MiComponente() {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };
  
  const decrementScore = () => {
    if(score != 0){
      setScore(score - 1); 
    }
  };
  

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <header>
        <h1>COUNTRY HUNT</h1> <ion-icon name="add-circle"></ion-icon>
      </header>
      <div className="score-div">
        <div>
          <div className="score-info">
            <h2>Your score</h2>
            <button className="info-btn" onClick={handleShowModal}>
              <ion-icon name="information-circle"></ion-icon>
            </button>
          </div>
          <span className="score">{score}</span>
        </div>
        <MoreInfo></MoreInfo>
      </div>
      <Game incrementScore={incrementScore} decrementScore={decrementScore}></Game>
      {showModal && 
      <InfoModal closeFunc={handleShowModal}></InfoModal>
      }
    </>
  );
}

export default MiComponente;
