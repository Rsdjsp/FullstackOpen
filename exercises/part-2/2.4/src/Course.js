import React from "react";
import Content from "./Content";
import Header from "./Header";

function Course({ courses }) {
  return (
    <>
      <div className="container">
        {courses.map((item) => {
          return (
            <div key={item.id}>
              <Header textTitle={item.name} />
              <Content parts={item.parts} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Course;
