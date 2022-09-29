export interface IWeather {
    cityName: string;
    temperature: number;
    humidity: number;
    description: string;
    windSpeed: number;
}

export interface IWEatherItem {
    id: number;
    cityName: string;
    countryName: string;
    time: Date;
    timeRise: string;
    timeDown: string;
    weather: {
        id: number
        name: string;
        description: string;
        icon: any;
    }
    main: {
        temp: number;
        tempFeels: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
        pressure: number;
    }
    wind: {
        speed: number;
    }
}