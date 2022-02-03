import React from "react";

function Part1({ part1 }) {
  const {name, exercises} = part1
  return (
    <div>
      <p>
        {name}{exercises}
      </p>
    </div>
  );
}

export default Part1;
