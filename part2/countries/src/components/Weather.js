import React from "react";

const Weather = ({ data }) => {
  if (data !== "") {
    return (
      <div>
        <div>
          <h4>temperature:</h4> {data.current.temperature}
        </div>
        <img src={data.current.weather_icons[0]} alt="weather icon"></img>
        <div>
          <h4>wind:</h4>
          <p>
            {data.current.wind_speed} mph direction {data.current.wind_dir}
          </p>
        </div>
      </div>
    );
  }

  return <div>Weather data not available!</div>;
};

export default Weather;
