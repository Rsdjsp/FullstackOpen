import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodSelect = () => {
    setGood(good + 1);
  };
  const neutralSelect = () => {
    setNeutral(neutral + 1);
  };
  const badSelect = () => {
    setBad(bad + 1);
  };

  let sum = good + neutral + bad;
  let average = sum / 3;
  average = average.toFixed(2);
  let positive = good / 3;
  positive = positive.toFixed(2);

  return (
    <div>
      <h1 className="title">Give feedback</h1>
      <div className="btn-container">
        <Button
          goodSelect={goodSelect}
          neutralSelect={neutralSelect}
          badSelect={badSelect}
        />
      </div>
      <h3>{sum === 0 ? "No feedback given" : ""}</h3>

      {sum > 0 && (
        <div className="statistics">
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={sum} />
          <Statistics text="average" value={average} />
          <Statistics text="positive" value={`${positive} %`} />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
