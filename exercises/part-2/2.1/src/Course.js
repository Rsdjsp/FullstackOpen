import React from "react";
import Content from "./Content";
import Header from "./Header";

function Course({ course }) {
  const { id, name, parts } = course;

  return (
    <div className="container">
      <Header title={name} />
      <Content id={id} parts={parts} />
    </div>
  );
}

export default Course;
