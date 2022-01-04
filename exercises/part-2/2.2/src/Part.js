import React from "react";

function Part({ text, exercises }) {
  return (
    <div>
      <p>
        {text} <span>{exercises}</span>
      </p>
    </div>
  );
}

export default Part;
