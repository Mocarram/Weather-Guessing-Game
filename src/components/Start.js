import React, { useEffect } from "react";
import "./Start.css";
import { Link } from "react-router-dom";
import smartCities from "../data/smartCities.js";
import { useDispatch } from "react-redux";
import { addCity } from "../features/CitiesSlice";
import Footer from "./Footer";

function Start() {
  const dispatch = useDispatch();

  // Adding 5 cities to the redux store on page load
  useEffect(() => {
    // get the cities and push them to redux store
    const random = Math.floor(Math.random() * 142);
    const cities = smartCities.slice(random, random + 5);

    // Add times to the cities
    // Add cities with time to the store
    cities.map((city) =>
      (async () => {
        const response = await fetch(
          `https://api.ipgeolocation.io/timezone?apiKey=c81f49ed724d4617ab2d6ce26a2a72b0&location=${city?.Name}`
        );
        const data = await response.json();
        const time =
          parseInt(data?.time_12.substr(0, 2)) + data?.time_12.substr(8, 12);
        city.Time = time;
        dispatch(addCity({ ...city }));
      })()
    );
  }, [dispatch]);

  return (
    <div className="start__container">
      <header className="start__header">
        <h2>Ready to guess temperature?</h2>
        <span>Whenever you’re ready.</span>
      </header>
      <section className="start__button">
        <Link to="/game">
          <button>Start</button>
        </Link>
      </section>
      <section className="rules">
        <h3>Rules:</h3>
        <p>1.Guess temperature of the displayed city in celsius</p>
        <p>2. A deviation of 5 will be considered correct</p>
      </section>
      <Footer />
    </div>
  );
}

export default Start;
