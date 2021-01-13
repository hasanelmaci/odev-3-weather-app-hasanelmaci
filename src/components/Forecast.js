import styles from "./Forecast.module.css"




function Forecast({item,index}) {

    let date = new Date(item.valid_date);
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    
    let day = weekday[date.getDay()];

    
    return (
        <li className={styles.list}>
           <div className={ index ==0 ? styles.forecastContentFirst : styles.forecastContent}>
               <p className="day">{day}</p>
               <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}/>
               <p className="min-max">{item.high_temp}° {item.min_temp}°</p>
           </div>
        </li>
    )
}

export default Forecast
