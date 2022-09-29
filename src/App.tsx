import React, { useEffect, useState } from 'react';
import { getWeatherByCityName, getWeatherByCoordinates } from './api/WeatherService';
import SearchBox from './components/SearchBox';
import Weather from './components/Weather';
import { StyledApp } from './styles/App.styled';
import { IWEatherItem } from './types/weather';
import { ICity } from './types/city';
import Loader from './components/UI/Loader';
import { useLoading } from './Hooks/useLoading';


function App() {

  const initialState: any = {
    coord: {
      lon: 10.99,
      lat: 44.34
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10n"
      }
    ],
    base: "stations",
    main: {
      temp: 29,
      feels_like: 30,
      temp_min: 24,
      temp_max: 31,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933
    },
    visibility: 10000,
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18
    },
    rain: {
      "1h": 3.16
    },
    clouds: {
      all: 100
    },
    dt: 1661870592,
    sys: {
      type: 2,
      id: 2075663,
      country: "IT",
      sunrise: 1661834187,
      sunset: 1663870592
    },
    timezone: 7200,
    id: 3163858,
    name: "Zocca",
    cod: 200
  }

  const _transformWeatherItem = (item: any) => {
    const newWeatherItem: IWEatherItem =  {
      id: item.id,
      cityName: item.name,
      countryName: item.sys.country,
      time: item.dt,
      timeRise: _transformDateItem(item.sys.sunrise),
      timeDown: _transformDateItem(item.sys.sunset),
      weather: {
          id: item.weather[0].id,
          name: item.weather[0].main,
          description: item.weather[0].description,
          icon: item.weather[0].icon
      },
      main: {
          temp: Math.round(item.main.temp),
          tempFeels: Math.round(item.main.feels_like),
          temp_min: Math.round(item.main.temp_min),
          temp_max: Math.round(item.main.temp_max),
          humidity: item.main.humidity,
          pressure: item.main.pressure,
      },
      wind: {
          speed: item.wind.speed
      }
    }
    return newWeatherItem
  }
  
  const _transformDateItem = (date: number) => {
    const options: object = {
      hour: 'numeric',
      minute: 'numeric'
    }

    const newDate = new Date(date * 1000)

    return newDate.toLocaleString('en', options)
  }

  const [currentWeather, setCurrentWeather] = useState<IWEatherItem>()
  const [query, setQuery] = useState("Chop")
  const [city, setCity] = useState<ICity>()

  const [getWeather, isLoading, error] = useLoading(async () => {
      let response = await getWeatherByCityName(query)
      if(response == undefined){
        response = await getWeatherByCoordinates(city?.latitude, city?.longitude)
      }
      setCurrentWeather(_transformWeatherItem(response))
  })

  useEffect( () => {

  setCurrentWeather(_transformWeatherItem(initialState))
     getWeather() 
  }, [query, city])
  

  return (
    <StyledApp>
      <SearchBox query={query} setQuery={setQuery} setCity={setCity}/>
      <Weather item={currentWeather} isLoading={isLoading}/>
      <Loader isLoading={isLoading}/>
    </StyledApp>    
  );
}

export default App;
