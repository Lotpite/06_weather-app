import axios from "axios";
import { ICity } from "../types/city";

const base_url = "https://api.openweathermap.org/data/2.5/weather?"
const language = "en";
const units = "metric"

export const getLocalWeather = async () => {
    console.log(process.env.REACT_APP_WEATHER_API_KEY)
    const weather = await axios.get(`${base_url}lat=50.15&lon=28.39&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}&lang=${language}`)
    return weather.data
}

export const getWeatherByCityName = async (cityName: string) => {
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}&lang=${language}`)
        return weather.data
    } catch(error: any) {
        if(!cityName) {
            alert(`${error.response.statusText}. Enter city name again after 3 second`)
        }
    }
}

export const getWeatherByCoordinates = async (lat: ICity["latitude"], lon: ICity["longitude"]) => {
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}&lang=${language}`)
        return weather.data
    } catch (error: any) {
        if(lat && lon) {
            alert(`${error.response.statusText}, coordinates have not been found`)
        }
    }
}   

// export const get4daysWeather = async () => {
//     try {
//         const weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=48.48&lon=22.22&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
//         return weather.data
//     } catch(error: any) {
//         alert(error.response.statusText)
//     }
// }