import React from "react";

const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({part, exercises}) => {
  return(
    <>
      <p>
        {part} {exercises} 
      </p>
    </>
  );
};

const Content = ({parts}) => {
  return(
    <>
      {parts.map(p => <Part key = {p['id']} part = {p['name']} exercises = {p['exercises']}/> )}
    </>
  );
};

const Total = ({parts}) => {
  return(
    <>
      <h3>total of exercises {parts.map(p => p.exercises).reduce((acc, val) => acc + val)}</h3>
    </>
  );
};


const Course = ({course}) => {
  return(
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default Course