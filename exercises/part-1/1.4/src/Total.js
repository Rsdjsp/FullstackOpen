import React from "react";

function Total({ parts }) {
  const [data1, data2, data3] = parts;

  return (
    <div>
      <p>
        Number of exercises{" "}
        {data1.exercises + data2.exercises + data3.exercises}{" "}
      </p>
    </div>
  );
}

export default Total;
