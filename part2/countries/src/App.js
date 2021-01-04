import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  
  
  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  
  const clickHandle = (name) => () => setSearch(name);
  
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      find countries <input value={search} onChange={handleSearch}></input>
      <Countries countries={countries} search={search} clickHandle={clickHandle}/>
    </div>
  );
};

export default App;
