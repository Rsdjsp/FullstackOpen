import React from "react";

function SingleCountry({ item,showInfo }) {
  console.log(item);

  return (
    <>
      <h2>{item.name.common} <button onClick={showInfo}>Hide Info</button> </h2>
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
      ;
    </>
  );
}

export default SingleCountry;
