import React, {FC} from 'react'
import { City, SuggestionsWrapper } from '../styles/CitySugesstions.styled';
import { ICity } from '../types/city'

interface ICitySugesstionsProps {
    isActive: boolean;
    cities: ICity[];
    setWeather: (cityName: string, cityItem: any) => void
}

const CitySugesstions: FC<ICitySugesstionsProps> = ({cities, setWeather, isActive}) => {

  let suggestions = cities.map(city => {
    return (
        <City key={city.id} onClick={() => setWeather(city.name, city)}>
            {city.name}, {city.country}
        </City>
    )
  })

  return (
    <SuggestionsWrapper isActive={isActive}>
        {suggestions}
    </SuggestionsWrapper>
  )
}

export default CitySugesstions