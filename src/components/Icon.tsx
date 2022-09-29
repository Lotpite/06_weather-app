import React, {FC} from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import clouds from '../assets/icons/clouds.png'
import cloudsun from '../assets/icons/cloudsun.png'
import rain from '../assets/icons/rain.png'
import rainsun from '../assets/icons/rainsun.png'
import snow from '../assets/icons/snow.png'
import thunderstorm from '../assets/icons/thunderstorm.png'
import mist from '../assets/icons/mist.png'
import wind from '../assets/icons/wind.png'
import min from '../assets/icons/min.png'
import max from '../assets/icons/max.png'
import loupe from '../assets/icons/loupe.png'
import humidity from '../assets/icons/humidity.png'
import barometer from '../assets/icons/barometer.png'
import termometer from '../assets/icons/termometer.png'
import sunrise from '../assets/icons/sunrise.png'
import sunset from '../assets/icons/sunset.png'


import { IconBlock, IconImg, IconText } from '../styles/WeatherIcon.styled';

interface IconProps {
    iconName: string;
    isBig: boolean;
    isLoupe?: boolean;
    text?: string | number
}

const Icon:FC<IconProps> = ({iconName, isBig, isLoupe, text}) => {
    let icon: typeof rain = '';
    let alt: string = '';
    let content: typeof text = '';

    switch(iconName) {
        case "loupe": {
            icon = loupe;
            alt = 'loupe';
            break
        }
        case "wind": {
            icon = wind;
            alt = 'wind';
            content = text;
            break
        }
        case "termometer": {
            icon = termometer;
            alt = 'termometer';
            content = text;
            break
        }
        case "min": {
            icon = min;
            alt = 'min';
            content = text;
            break
        }
        case "max": {
            icon = max;
            alt = 'max';
            content = text;
            break
        }
        case "humidity": {
            icon = humidity;
            alt = 'humidity';
            content = text;
            break
        }
        case "barometer": {
            icon = barometer;
            alt = 'barometer';
            content = text;
            break
        }
        case "sunrise": {
            icon = sunrise;
            alt = 'sunrise';
            content = text;
            break
        }
        case "sunset": {
            icon = sunset;
            alt = 'sunset';
            content = text;
            break
        }
        case "01d":
        case "01n": {
            icon = sun;
            alt = 'sun';
            content = text;
            break
        }
        case "02d":
        case "02n": {
            icon = cloudsun;
            alt = 'cloudsun';
            content = text;
            break
        }
        case "03d":
        case "03n": {
            icon = cloud;
            alt = 'cloud';
            content = text;
            break
        }
        case "04d":
        case "04n": {
            icon = clouds;
            alt = 'clouds';
            content = text;
            break
        }
        case "09d":
        case "09n": {
            icon = rain;
            alt = 'rain';
            content = text;
            break
        }
        case "10n":
        case "10d": {
            icon = rainsun;
            alt = 'rainsun';
            content = text;
            break
        }
        case "11d":
        case "11n": {
            icon = thunderstorm;
            alt = 'thunderstorm';
            content = text;
            break
        }
        case "13d":
        case "13n": {
            icon = snow;
            alt = 'snow';
            content = text;
            break

        }
        case "50d":
        case "50n": {
            icon = mist;
            alt = 'mist';
            content = text;
            break
        }

        default: break
    }

    return (

    <IconBlock loupe={isLoupe} big={isBig}>
        <IconImg loupe={isLoupe} big={isBig} src={icon} alt={alt} />
        <IconText big={isBig}>{content}</IconText>
    </IconBlock>
  )
}

export default Icon