import React from "react";

function Stadistics({ good, neutral, bad }) {
  const sum = good + neutral + bad;
  const average = sum / 3
  const positive = good / 3
  
  if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3>
  } else {
    return (
    
      <div>
        <p>
          {good !== 0 ? `Good ${good}` : ""}
        </p>
        <p>
          {neutral !== 0 ? `Neutral ${neutral}` : ""}
        </p>
        <p>
          {bad !== 0 ? `Bad ${bad}` : ""}
        </p>
        <p>
          {sum !== 0 ? `All ${sum}` : ""}
        </p>
        <p>
          {average !== 0 ? `Average ${average}` : ""}
        </p>
        <p>
          {positive !== 0 ? `Positive ${positive}` : ""}
        </p>
      
      </div>
    );
  }
}

export default Stadistics;
