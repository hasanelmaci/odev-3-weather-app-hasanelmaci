import React from "react";
import Forecast from "../Forecast/Forecast";
import MainForecast from "../MainForecast/MainForecast";
import styles from "./ForecastContainer.module.css";

function ForecastContainer({ data }) {
  return (
    <div className={styles.container}>
      <MainForecast item={data} />

      <ul className={styles.listContainer}>
        {data.map((item, index) => (
          <Forecast key={item.valid_date} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default ForecastContainer;
