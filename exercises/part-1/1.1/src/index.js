import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

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
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        excs1={exercises1}
        excs2={exercises2}
        excs3={exercises3}
      />
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
