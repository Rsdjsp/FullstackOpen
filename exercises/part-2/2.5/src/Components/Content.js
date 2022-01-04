import React from "react";
import Part from "./Part";

function Content({ parts }) {
  let total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <>
      <div className="parts">
        {parts.map((part) => {
          return (
            <Part key={part.id} text={part.name} number={part.exercises} />
          );
        })}
      </div>
      <div className="total">
        <h4> Total Exercises {total}</h4>
      </div>
    </>
  );
}

export default Content;
