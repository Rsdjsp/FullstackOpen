import React from "react";

function Content({ parts }) {
  const [data1, data2, data3] = parts;
  
  return (
    <div>
      <p>
        {data1.name} {data1.exercises}
      </p>
      <p>
        {data2.name} {data2.exercises}
      </p>
      <p>
        {data3.name} {data3.exercises}
      </p>
    </div>
  );
}

export default Content;
