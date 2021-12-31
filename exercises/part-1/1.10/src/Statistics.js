import React from "react";

function Statistics({ text, value }) {
  
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
}

export default Statistics;
