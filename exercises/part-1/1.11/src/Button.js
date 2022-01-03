import React from "react";

function Button({ goodSelect, neutralSelect, badSelect }) {
  return (
    <div>
      <button onClick={goodSelect}>Good</button>
      <button onClick={neutralSelect}>Neutral</button>
      <button onClick={badSelect}>Bad</button>
    </div>
  );
}

export default Button;
