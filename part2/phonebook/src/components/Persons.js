import React from "react";
import Person from "./Person";
const Persons = ({ search, persons, handleFunction }) => {
  return (
    <div>
      {persons
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .map((p) => (
          <Person
            key={p.id}
            name={p.name}
            number={p.number}
            handleFunction={handleFunction}
            id={p.id}
          />
        ))}
    </div>
  );
};

export default Persons;
