import React, { useState } from "react";
import ReactDOM from "react-dom";
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

  return (
    <div>
      <h1 className="title">Give feedback</h1>
      <div className="btn-container">
        <button onClick={goodSelect}>Good</button>
        <button onClick={neutralSelect}>Neutral</button>
        <button onClick={badSelect}>Bad</button>
      </div>
      <div className="statistics">
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
