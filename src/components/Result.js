import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPoint, resetScore, selectPoints } from "../features/ScoreSlice";
import ScoreBoard from "./ScoreBoard";
import "./Result.css";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { resetCities } from "../features/CitiesSlice";

function Result() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [winOrLose, setwinOrLose] = useState("lost");
  const points = useSelector(selectPoints);

  const playAgain = () => {
    // removes scores from redux
    dispatch(resetScore());
    // removes Points from redux
    dispatch(resetPoint());

    dispatch(resetCities());

    // redirects to the start page
    history.push("/");
  };

  useEffect(() => {
    if (points >= 3) {
      setwinOrLose("won");
    }
  }, [points]);

  return (
    <div className="result-container">
      <section className="result__header">
        <h2 className={winOrLose === "won" ? "won" : "lost"}>
          You {winOrLose}
        </h2>
        <p>Score: {points}/5</p>
        {/* use useHistory to redirect and remove redux entries */}
        <button onClick={playAgain}>Play Again</button>
      </section>
      <ScoreBoard />
      <Footer />
    </div>
  );
}

export default Result;
