import React from "react";

function ItemList({ newCountry, filter }) {
  let list = newCountry.filter(
    (content) =>
      content.name.common.toLowerCase().includes(filter.toLowerCase()) === true
  );


  if (list.length > 10 && filter) {
    return <p>Too many matches,specify another filter</p>;
  } else if (list.length === 1 && filter) {
    return (
      <>
        {list.map((item) => {
          return (
            <div className="country-info" key={item.name.common}>
              <h2>{item.name.common}</h2>
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
            </div>
          );
        })}
      </>
    );
  } else if (list.length === 0) {
    return <p>Your serch returned no results</p>;
  } else {
    return (
      <>
        {list.map((item) => {
          return <p key={item.name.common}>{item.name.common}</p>;
        })}
      </>
    );
  }
}

export default ItemList;
