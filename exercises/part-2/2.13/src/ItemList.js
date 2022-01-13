import React, { useState } from "react";
import CountryInfo from "./CountryInfo";
import SingleCountry from "./SIngleCountry";

function ItemList({ filter, newCountry }) {
  const [info, setInfo] = useState(false);

  const [itemfilter, setItemFilter] = useState([]);

  let list = newCountry.filter(
    (content) =>
      content.name.common.toLowerCase().includes(filter.toLowerCase()) === true
  );

  const showInfo = (item) => {
    setInfo(!info);
    setItemFilter(item);
  };

  if (list.length > 10 && filter) {
    return <p>Too many matches,specify another filter</p>;
  } else if (list.length === 1 && filter) {
    return (
      <>
        <CountryInfo list={list} />
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

        <div>
          {info && <SingleCountry item={itemfilter} showInfo={showInfo} />}
        </div>
      </>
    );
  }
}

export default ItemList;
