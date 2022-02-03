import React from "react";
import Part from "./Part";

function Content({ parts }) {
  return (
    <div>
      {parts.map((item) => {
        return (
          <Part key={item.id} text={item.name} exercises={item.exercises} />
        );
      })}
    </div>
  );
}

export default Content;
