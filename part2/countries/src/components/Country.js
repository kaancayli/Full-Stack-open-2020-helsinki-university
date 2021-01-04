import React from "react";
import Weather from "./Weather";
import { useEffect, useState } from "react";
import axios from "axios";

const Country = ({country}) => {
  const [city, setCity] = useState('');
  
  const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`;
  
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setCity(response.data);
    });
  }, [url]);
  return (
    <>
      <h2>{country.name}</h2>
      <div>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>languages</h3>
        <ul>
          {country.languages.map((lang) => (
            <li key={lang.name}>{lang.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt={country.name} height="100px"></img>
      </div>
      <Weather data={city}/>
    </>
  );
};

export default Country
