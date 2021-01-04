import React from "react";
import Country from "./Country";


const Countries = ({ countries, search, clickHandle}) => {
  const result = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  if (result.length === 1 && result !== undefined) {
    return (
      <>
      <Country country={result[0]}/>
      </>
    );
  }

  if (result.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <>
      {result.map((c) => (
        <div key={c.name}>
          <p>{c.name}</p>
          <button onClick={clickHandle(c.name)}>show</button>
        </div>
      ))}
    </>
  );
};

export default Countries;
