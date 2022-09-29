import styled from "styled-components";

interface IWeatherProps {
    isLoading: boolean
}

export const WeatherWrapper = styled.div<IWeatherProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-radius: 10px;
    margin-top: 25px;
    padding: 20px;
    z-index: 1;
    filter: ${({isLoading}) => isLoading ? "blur(3px)" : "blur(0px)"};
`

export const LocationName = styled.h2`
    margin-bottom: 25px;
    font-size: 32px;
`

export const WeatherMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`   

export const WeatherBig = styled.div`
    margin-top: 50px;
    display: flex;
`

export const WeatherDetails = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;    
    align-items: center;
`