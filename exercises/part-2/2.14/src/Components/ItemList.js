import React, { useState } from "react";

import SingleCountry from "./SIngleCountry";

function ItemList({ filter, newCountry }) {
  const [info, setInfo] = useState(false);
  const [itemfilter, setItemFilter] = useState([]);
  const [weather, setWeather] = useState(null);

  let list = newCountry.filter(
    (content) =>
      content.name.common.toLowerCase().includes(filter.toLowerCase()) === true
  );

  const showInfo = (item) => {
    setInfo(true);
    setItemFilter(item);

    if (info === false) {
      weatherRequest(item.name.common);
    }
  };

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

  if (list.length > 10 && filter) {
    return <p>Too many matches,specify another filter</p>;
  } else if (list.length === 1 && filter) {
    return (
      <>
        <SingleCountry
          item={list[0]}
          setInfo={setInfo}
          weather={weather}
          setWeather={setWeather}
          info={info}
        />
      </>
    );
  } else if (list.length === 0 && filter) {
    return (
      <p>
        {" "}
        <b>Your serch returned no results</b>
      </p>
    );
  } else {
    if (!filter && info) {
      setInfo(false);
    }
    return (
      <>
        {!info && (
          <div className="LIst-container">
            {list.map((item) => {
              return (
                <div key={item.name.common}>
                  <>
                    <p>
                      {item.name.common}{" "}
                      {filter && (
                        <button
                          onClick={() => {
                            showInfo(item);
                          }}
                        >
                          Show Info
                        </button>
                      )}
                    </p>
                  </>
                </div>
              );
            })}
          </div>
        )}
        {filter && (
          <div>
            {info && (
              <SingleCountry
                item={itemfilter}
                setInfo={setInfo}
                weather={weather}
                info={info}
                setWeather={setWeather}
              />
            )}
          </div>
        )}
      </>
    );
  }
}

export default ItemList;
