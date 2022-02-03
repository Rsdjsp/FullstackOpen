import React from "react";
import Part from "./Part";

function Content({ parts }) {
  let total = 0;

  for (let i = 0; i < parts.length; i++) {
    total += parts[i].exercises;
  }

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
