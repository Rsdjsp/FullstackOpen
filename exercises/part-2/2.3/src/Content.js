import React from "react";
import Part from "./Part";

function Content({ parts }) {
  let total = parts.reduce((sum, part) => {
    return sum + part.exercises
  },0)

  
  return (
    <>
      <div className="Parts">
        {parts.map((item) => {
          return (
            <Part key={item.id} text={item.name} exercises={item.exercises} />
          );
        })}
      </div>

      <div className="total">
        <h4> Total exercises {total}</h4>
      </div>
    </>
  );
}

export default Content;
