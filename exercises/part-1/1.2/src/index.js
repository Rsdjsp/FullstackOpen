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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Part1 part1={part1} excs1={exercises1} />
      <Part2 part2={part2} excs2={exercises2} />
      <Part3 part3={part3} excs3={exercises3} />
      <Total excs1={exercises1} excs2={exercises2} excs3={exercises3} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
