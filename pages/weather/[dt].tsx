import {useRouter} from "next/router";
import {get5DayForecast, IForecastResponse} from "../../src/api/api";
import React from "react";

interface IWeatherDetailed {
    weatherData: IForecastResponse
}

export default function WeatherDetailed({weatherData}: IWeatherDetailed) {
    const {query} = useRouter()
    const weatherItem = weatherData.list.find((el) => el.dt === Number(query.dt))
    console.log('weatherItem', weatherItem)

    return (
        <>
            <h1>Weather in Ukraine {weatherItem.dt_txt}</h1>
            <h3>Weather description: {weatherItem.weather[0].description}</h3>
            <h3>Temperature</h3>
            <span>Max temperature: {weatherItem.main.temp_max}</span><br/>
            <span>Min temperature: {weatherItem.main.temp_min}</span><br/>
            <span>Feels like: {weatherItem.main.feels_like}</span><br/>
            <h3>Wind</h3>
            <span>Wind speed: {weatherItem.wind.speed}</span><br/>
            <span>Wind degree: {weatherItem.wind.deg}</span><br/>
            <span>Wind gust: {weatherItem.wind.gust}</span><br/>
            <h3>Pressure: {weatherItem.main.pressure}</h3>
        </>
    )
}

export async function getServerSideProps() {
    const weatherData = await get5DayForecast('Ukraine')
    return {props: {weatherData}};
}