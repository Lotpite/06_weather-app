import React, {FC, useEffect} from 'react'
import { DetailsWrapper, LocationName, WeatherBig, WeatherDetails, WeatherMain, WeatherWrapper } from '../styles/Weather.styled'
import { IWEatherItem } from '../types/weather'
import Icon from './Icon'

interface WeatherProps {
  item: IWEatherItem | undefined;
  isLoading: boolean
}
const Weather:FC<WeatherProps> = ({item, isLoading}) => {

  useEffect(() => {
    
  }, [item])
  

  return (
    <WeatherWrapper isLoading={isLoading}>
      <WeatherMain>
        <LocationName>{item?.cityName}, {item?.countryName}</LocationName>
        <h3>{item?.weather.description}</h3>
        <WeatherBig>
          <Icon isBig={true} iconName={item?.weather.icon} text={`${item?.main.temp}°C`}/>
        </WeatherBig>
      </WeatherMain>
      <WeatherDetails>
        <DetailsWrapper>
          <Icon isBig={false} iconName='termometer' text={`${item?.main.tempFeels}°C`}/> 
          <Icon isBig={false} iconName='min' text={`${item?.main.temp_min}°C`}/> 
          <Icon isBig={false} iconName='max' text={`${item?.main.temp_max}°C`}/> 
          <Icon isBig={false} iconName='humidity' text={`${item?.main.humidity}%`}/> 
          <Icon isBig={false} iconName='barometer' text={`${item?.main.pressure} mm`}/> 
          <Icon isBig={false} iconName='wind' text={`${item?.wind.speed} km/h`}/> 
          <Icon isBig={false} iconName='sunrise' text={item?.timeRise} /> 
          <Icon isBig={false} iconName='sunset' text={item?.timeDown} /> 
        </DetailsWrapper>
      </WeatherDetails>
  </WeatherWrapper>
  )
}

export default Weather