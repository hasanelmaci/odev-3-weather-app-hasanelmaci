import { useContext } from "react";
import { CityContext } from "../../contexts/CityProvider";
import styles from "./MainForecast.module.css";

function MainForecast({ item }) {
  const mainDay = item[0];
  const name = useContext(CityContext);

  return (
    <div className={styles.mainForecastContainer}>
      <div className={styles.mainForecast}>
        <div className={styles.header}>
          <h1>{name}</h1>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${mainDay.weather.icon}.png`}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.temp}>{mainDay.high_temp}° </p>
          <p className={styles.desc}>{mainDay.weather.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MainForecast;
