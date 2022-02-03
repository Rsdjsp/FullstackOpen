import React from "react";

function Part({ text, number }) {
  return (
    <div>
      <p>
        {text} <span>{number}</span>
      </p>
    </div>
  );
}

export default Part;
