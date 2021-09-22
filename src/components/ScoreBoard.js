import React from "react";
import { useSelector } from "react-redux";
import { selectScores } from "../features/ScoreSlice";
import "./ScoreBoard.css";

function ScoreBoard() {
  const scores = useSelector(selectScores);

  return (
    <div className="scorecard">
      <h5>Guessed (G) and Correct (C) temperature</h5>
      <div className="scores">
        {scores.map((score, i) => (
          <div
            key={i}
            className={`single-score ${score.result ? "green" : "red"}`}
            title={score.city}
          >
            <p className="city-name">{score.city}</p>
            <p className="guessed-score">G: {score.guess}</p>
            <p className="correct-score">C: {score.correct}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreBoard;
