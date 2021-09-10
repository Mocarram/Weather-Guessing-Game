import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPoints } from "../features/ScoreSlice";
import "./Result.css";

function Result() {
  const [winOrLose, setwinOrLose] = useState("lost");
  const points = useSelector(selectPoints);

  useEffect(() => {
    if (points >= 3) {
      setwinOrLose("Won");
    }
  }, [points]);

  return (
    <div className="result-container">
      <h2>You {winOrLose}</h2>
      <p>Your Total Point: {points}</p>
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  );
}

export default Result;
