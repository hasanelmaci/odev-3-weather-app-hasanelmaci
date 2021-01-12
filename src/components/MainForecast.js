import {useContext} from 'react'
import {CityContext} from '../contexts/CityProvider';



function MainForecast({item, handleDay}) {

    const mainDay = item[0]
    const name = useContext(CityContext)

    return (
        <div className="main-forecast">
                <h1>{name}</h1>
              <img src={`https://www.weatherbit.io/static/img/icons/${mainDay.weather.icon}.png`}/>          
              <p>{mainDay.high_temp}° </p>  
               <p>{mainDay.weather.description}</p>
        </div>
    )
}

export default MainForecast
