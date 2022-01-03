import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0]);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomSelected = () => {
    let numRandom = random(0, 5);
    if (numRandom === selected) {
      setSelected(numRandom + 1);
    } else {
      setSelected(numRandom);
    }
  };

  const voteCount = () => {
    const copy = [...points];
    copy[selected] += 1;

    setPoints(copy);
  };

  return (
    <>
      <div className="title">
        <h2>{anecdotes[selected]}</h2>
      </div>
      <div className="btn-container">
        <h3>has {points[selected]} votes</h3>
        <button onClick={voteCount}>Vote</button>
        <button onClick={randomSelected}>Ramdom Anecdote</button>
      </div>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
