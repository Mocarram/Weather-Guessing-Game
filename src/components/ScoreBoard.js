import React from "react";
import { useSelector } from "react-redux";
import { selectScores } from "../features/ScoreSlice";
import "./ScoreBoard.css";

function ScoreBoard() {
  const scores = useSelector(selectScores);

  return (
    <div className="scorecard">
      {scores.map((score, i) => (
        <div
          key={i}
          className={`single-score ${score.result ? "green" : "red"}`}
        >
          <p className="guessed-score">{score.guess}</p>
          <p className="correct-score">Was {score.correct}</p>
        </div>
      ))}
    </div>
  );
}

export default ScoreBoard;
