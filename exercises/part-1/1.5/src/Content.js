import React from "react";

function Content({ course }) {
  const { parts } = course;
  return (
    <div>
      {parts.map((item, index) => {
        return (
          <p key={index}>
            {item.name} {item.exercises}
          </p>
        );
      })}
    </div>
  );
}
export default Content;
