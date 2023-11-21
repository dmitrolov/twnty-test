const api = {
    key: process.env.apiKey, base: 'https://api.openweathermap.org/data/2.5/'
}
type responseCode = 200 | 400

export interface IForecastResponse {
    city: ICity;
    list: IWeatherForecastItem[];
    cod?: responseCode;
    message?: string;
}

interface ICity {
    name: string,
    population: number,
}

export interface IWeatherForecastItem {
    main: ITemperature,
    dt: number,
    dt_txt: string,
    weather: IWeather[],
    wind: IWind,
}

interface ITemperature {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
}

interface IWeather {
    description: string,
}

interface IWind {
    speed: number
    deg: number,
    gust: number,
}

export const get5DayForecast = async (searchText: string): Promise<IForecastResponse> => {
    try {
        const res = await fetch(`${api.base}forecast?q=${searchText}&units=metric&APPID=${api.key}`);
        return await res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}