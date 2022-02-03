import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Total from "./Total";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Part1 part1={part1} />
      <Part2 part2={part2} />
      <Part3 part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
