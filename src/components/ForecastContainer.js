import React from "react";
import Forecast from "./Forecast";
import MainForecast from "./MainForecast";

function ForecastContainer({ data }) {
  const handleDay = () => {};

  return (
    <div className="container">
      <MainForecast item={data} />

      <ul className="list-container">
        {data.map((item) => (
          <Forecast key={item.valid_date} item={item} handleDay={handleDay} />
        ))}
      </ul>
    </div>
  );
}

export default ForecastContainer;
