import React from "react";

function Part2({ part2 }) {
 const {name, exercises} = part2
  return (
    <div>
      <p>
        {name}{exercises}
      </p>
    </div>
  );
}

export default Part2;
