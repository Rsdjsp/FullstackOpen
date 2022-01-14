import React from "react";

function Filter({filter,setFilter}) {
  return (
    <>
      <div className="input-container">
        Filter by name: {""}
        <input
          type="text"
          className="filter.input"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </>
  );
}

export default Filter;
