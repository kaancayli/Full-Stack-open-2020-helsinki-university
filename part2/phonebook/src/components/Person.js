import React from "react";

const Person = ({ name, number, handleFunction, id }) => {
  return (
    <>
      <p key={name}>
        {name} {number}
      </p>
      <button onClick={() => handleFunction(id)}>delete</button>
    </>
  );
};

export default Person;
