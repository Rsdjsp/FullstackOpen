import React from 'react'

function CountryInfo({ list }) {
    

    return (
        <div>
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
        </div>
    )
}

export default CountryInfo
