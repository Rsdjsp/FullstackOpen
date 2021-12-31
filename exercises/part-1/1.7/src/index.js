import React, { useState } from "react";
import ReactDOM from "react-dom";

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

  const sum =  good + neutral + bad

  

  return (
    <div>
      <h1 className="title">Give feedback</h1>
      <div className="btn-container">
        <button onClick={goodSelect}>Good</button>
        <button onClick={neutralSelect}>Neutral</button>
        <button onClick={badSelect}>Bad</button>
      </div>
      <div className="stadistics">
        <p>
          Good <span>{good}</span>
        </p>
        <p>
          Neutral <span>{neutral}</span>
        </p>
        <p>
          Bad <span>{bad}</span>
        </p>
        <p>All <span>{ sum }</span> </p>
         <p>Average <span> {sum /3} </span></p>
         <p>Positive <span> {good /3} % </span></p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
