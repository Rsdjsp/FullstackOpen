import React from "react";

function Content({ part1, part2, part3, excs1, excs2, excs3 }) {
  return (
    <div>
      <p>
        {part1} {excs1}
      </p>
      <p>
        {part2} {excs2}
      </p>
      <p>
        {part3} {excs3}
      </p>
    </div>
  );
}

export default Content;
