import React from "react";

function Part3({ part3 }) {
 const {name, exercises} = part3
  return (
    <div>
      <p>
        {name}{exercises}
      </p>
    </div>
  );
}

export default Part3;
