import React from "react";

const InfoModal = ({ closeFunc }) => {
  return (
    <div className="modal-layout">
      <div className="info-div">
        <button className="close-info-btn" onClick={() => closeFunc()}>X</button>
        <h3>Rules</h3>
        <ul>
          <li>If you select the right answer you will gain 1 point.</li>
          <li>But if you get the wrong answer you will lose 1 point.</li>
        </ul>
        <p>Good luck hunting</p>
      </div>
    </div>
  );
};

export default InfoModal;
