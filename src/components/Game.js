import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cities from "../data/cities.js";
import { addScore, addPoint } from "../features/ScoreSlice.js";
import Result from "./Result";
import ScoreBoard from "./ScoreBoard";
import "./Game.css";

function Game() {
  const dispatch = useDispatch();
  const [userGuess, setUserGuess] = useState("");
  const [cityTraverse, setCityTraverse] = useState(1);
  const [currentCity, setCurrentCity] = useState(cities[0]?.name);
  const [showResult, setShowResult] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=9cff733aee57cb05b63dd4f731c46bc4`
    );
    const data = await response.json();
    const apiResult = Math.round(data?.main?.temp);

    // Checking if the result is correct
    if (userGuess >= apiResult - 5 && userGuess <= apiResult + 5) {
      // Adding result to the store
      dispatch(
        addScore({ guess: userGuess, correct: apiResult, result: true })
      );

      // Adding point
      dispatch(addPoint());
    } else {
      // Adding result to the store
      dispatch(
        addScore({ guess: userGuess, correct: apiResult, result: false })
      );
    }

    // Go next or publish result
    if (cityTraverse < 5) {
      // Go for the next city
      setCityTraverse(cityTraverse + 1);
      setCurrentCity(cities[cityTraverse].name);
    } else {
      // go to result publication
      setShowResult(true);
    }

    // Reset user guess
    setUserGuess("");
  };

  return (
    <>
      <div className="gameContainer">
        {showResult ? (
          <Result />
        ) : (
          <>
            <h3 className="city"> City Name: {currentCity} </h3>
            <form className="input-form" onSubmit={handleCheck}>
              <input
                value={userGuess}
                type="number"
                onChange={(e) => setUserGuess(parseInt(e.target.value))}
                placeholder="Input temp in celcius"
                autoFocus
              />
              <button className="check-button" type="submit">
                Check
              </button>
            </form>
          </>
        )}
      </div>

      <ScoreBoard />
    </>
  );
}

export default Game;
