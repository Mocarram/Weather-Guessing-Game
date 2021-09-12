import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Result from "./Result";
import "./Game.css";
import { useSelector } from "react-redux";
import { addScore, addPoint } from "../features/ScoreSlice.js";
import { selectCities } from "../features/CitiesSlice.js";
import ScoreBoard from "./ScoreBoard";
import { useHistory } from "react-router-dom";

function Game() {
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();
  const [userGuess, setUserGuess] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [cityTraverse, setCityTraverse] = useState(1);
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [showResult, setShowResult] = useState(false);
  const [disableCheck, setDisableCheck] = useState(false);
  const [gameSteps, setGameSteps] = useState(1);
  const guessInputRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // Always autofocusing the input element
    guessInputRef.current.focus();
    // Enabling the "next" button on new city
    setDisableCheck(false);

    // Getting the temp for the current city on mount
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity?.Name}&units=metric&appid=9cff733aee57cb05b63dd4f731c46bc4`
      );
      const data = await response.json();
      setApiResult(Math.round(data?.main?.temp));
    })();
  }, [currentCity]);

  const handleCheck = (e) => {
    e.preventDefault();

    // Disabling the button until next city
    setDisableCheck(true);

    // Checking if the result is correct
    if (userGuess >= apiResult - 5 && userGuess <= apiResult + 5) {
      // Adding result to the store
      dispatch(
        addScore({
          city: currentCity.Name,
          guess: userGuess || "N/A",
          correct: apiResult,
          result: true,
        })
      );

      // Adding +1 point
      dispatch(addPoint());
    } else {
      // Adding result to the store
      dispatch(
        addScore({
          city: currentCity.Name,
          guess: userGuess || "N/A",
          correct: apiResult,
          result: false,
        })
      );
    }

    // Go next or publish result
    if (cityTraverse < 5) {
      // Go for the next city
      setCityTraverse(cityTraverse + 1);
      setCurrentCity(cities[cityTraverse]);
      setGameSteps(gameSteps + 1);
    } else {
      // go to result publication
      setShowResult(true);
    }

    // Reset user guess
    setUserGuess("");
  };

  if (!cities.length) {
    // if cities array is empty
    history.replace("/");
    // Reloading the page to skip errors
    window.location.reload();
  }

  return (
    <>
      <div className="game__container">
        {showResult ? (
          <Result />
        ) : (
          <>
            <header>
              <p className="steps">{gameSteps}/5</p>
              <h3 className="city"> {currentCity.Name} </h3>
              <h5 className="country"> (Country: {currentCity.Country}) </h5>
              <h5 className="time">
                It's about {currentCity.Time} in {currentCity.Name}
              </h5>
            </header>
            <form className="input-form" onSubmit={handleCheck}>
              <input
                value={userGuess}
                type="number"
                onChange={(e) => setUserGuess(parseInt(e.target.value))}
                placeholder="Temperature of this city in celsius?"
                ref={guessInputRef}
              />
              <button
                className="check-button"
                type="submit"
                disabled={disableCheck}
              >
                Check
              </button>
            </form>

            {gameSteps > 1 ? <ScoreBoard /> : ""}
          </>
        )}
      </div>
    </>
  );
}

export default Game;
