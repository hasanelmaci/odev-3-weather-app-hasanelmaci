import axios from 'axios';
import {useState, useEffect,useContext} from 'react';
import {CityContext} from '../contexts/CityProvider';
import ForecastContainer from './ForecastContainer/ForecastContainer'

function FetchData() {

    const value = useContext(CityContext)
    
    
    const [data, setData] = useState('')
    const [isLoading , setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        const key = process.env.REACT_APP_KEY
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${value || "Izmir"}&days=7&key=${key}`)
        .then(res =>{
            setData(res.data.data)
            setIsLoading(false)
        })
    },[value])

    if(isLoading){

        console.log('LOADING')
    }else{
        console.log(data)
    }
  
    return (
        <div>
            
           {!isLoading ? 
           
           <ForecastContainer data={data}/>

           : <h1>LOADING</h1>}
        </div>
    )
}

export default FetchData
