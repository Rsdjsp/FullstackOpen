import React from "react";

function Total({ course }) {
  const { parts } = course;
  const [part1, part2, part3] = parts;

  return (
    <div>
      <p>
        Number of exercises{" "}
        {part1.exercises + part2.exercises + part3.exercises}{" "}
      </p>
    </div>
  );
}

export default Total;
