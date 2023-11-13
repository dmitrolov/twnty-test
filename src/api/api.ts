const api = {
    key: '4201e49a9242c900993b52966ad08c0e',
    base: 'https://api.openweathermap.org/data/2.5/'
}

export const getCurrentWeather = async (searchText: string): Promise<any> => {
    const res = await fetch(`${api.base}weather?q=${searchText}&units=metric&APPID=${api.key}`);
    return await res.json();
}

export interface IForecastResponse {
    city: ICity;
    list: IWeatherForecastItem[];
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

export const get5DayForecast = async (searchText: string): Promise<IForecastResponse> => {
    const res = await fetch(`${api.base}forecast?q=${searchText}&units=metric&APPID=${api.key}`);
    return await res.json();
}