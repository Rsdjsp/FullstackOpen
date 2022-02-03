import React, { useEffect } from "react";

function SingleCountry({ item, setInfo, weather, info, setWeather }) {
  const weatherRequest = (nameCountry = "New York") => {
    const axios = require("axios");
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = {
      access_key: apiKey,
      query: `${nameCountry}`,
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        const apiResponse = response.data;
        setWeather(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    weatherRequest(item.name.common);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>
        {item.name.common}{" "}
        {info && <button onClick={() => setInfo(false)}>Hide Info</button>}
      </h2>
      <p>
        <b>Capital:</b> {item.capital}
      </p>
      <p>
        <b>Population:</b> {item.population}
      </p>
      <h3>Lenguages</h3>
      <div className="list-container">
        {Object.keys(item.languages).map((language, i) => {
          return (
            <ul key={i}>
              <li>{item.languages[language]}</li>
            </ul>
          );
        })}
      </div>
      <div className="flag-container">
        <img src={item.flags.png} alt="country-flag" />
      </div>
      <div className="weather">
        <h3>Weather in {item.name.common} </h3>
        <p>
          <b>Temperature:</b>{" "}
          {weather === null ? "0" : weather.current.temperature} Celcius
        </p>
        {weather !== null && (
          <img
            className="weatherImg"
            src={weather.current.weather_icons[0]}
            alt="Day"
          />
        )}
        {weather !== null && (
          <p>
            <b>Wind:</b> {weather.current.wind_speed} mph, direction{" "}
            {weather.current.wind_dir}
          </p>
        )}
      </div>
    </>
  );
}

export default SingleCountry;
