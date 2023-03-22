import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {

 const [weather,setWeather] = useState(null)

 useEffect(() => {
    const APIKEY = "1633992653bd328256d5b66b485671fd";
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}&units=metric`

    axios.get(APIURL)
    .then(response => {
        console.log(response.data);
        setWeather(response.data);})
    .catch(error => {console.log(error);})

 },[]);



  return (<div>
        {weather ? 
        (<div> 
            <h3>HUMIDITY : ${weather.main.humidity}</h3>
            <h3>TEMPERATURE : ${weather.main.temp}</h3>
            <h3>DESCRIPTION : ${weather.weather[0].description}</h3>

       </div>) : (<h1> LOADING . . .</h1>)
       }
    </div>
  );
}

export default Weather