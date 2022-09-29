import React, {FC, useState, useEffect, useMemo} from 'react'
import { SearchForm, SearchInput, StyledForm } from '../styles/SearchBox.styled'
import debounce from 'lodash.debounce'
import { ICity } from '../types/city';


import Icon from './Icon';
import { getCities } from '../api/CityServices';
import CitySugesstions from './CitySugesstions';

interface ISearchProps {
    query: string;
    setQuery: (text: string) => void
    setCity: (city: ICity) => void
}


const SearchBox:FC<ISearchProps> = ({query, setQuery, setCity}) => {

  useEffect(() => {

  }, [query])
  
  const [value, setValue] = useState("")
  const [active, setActive] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)

    if(event.target.value !== "") {
      getCities(event.target.value)
      .then(res => {
        if(res) {
          setSuggestions(res.data)
          setActive(true)
        }
      })
    }
  }

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 1000)
  , []);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    setWeather(value, null)
  }

  const setWeather = (cityName: string, cityItem: any) => {
    if(cityName && !cityItem) {
      setQuery(cityName)
      setActive(false)
    }

    if(cityName && cityItem) {
      setCity(cityItem)
      setActive(false)
    }

    setQuery(cityName)
    setActive(false)
    setValue('')
  }


  return (
    <SearchForm>
      <StyledForm action="" onSubmit={(e) => submitHandler(e)}>
        <Icon isBig={false} iconName="loupe" isLoupe={true}/>
        <SearchInput type="text" 
          placeholder='Enter city name' 
          onChange={debouncedChangeHandler} 
        />
        {value !== '' 
      ? <CitySugesstions isActive={active}
          setWeather={setWeather} 
          cities={suggestions} 
        /> 
      : <></>}
      </StyledForm>
      
    </SearchForm>
  )
}

export default SearchBox