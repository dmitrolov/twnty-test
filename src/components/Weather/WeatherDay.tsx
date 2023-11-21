import React from "react";
import {IWeatherForecastItem} from "../../api/api";
import {WeatherDayItem, WeatherDayWrapper} from "./WeatherStyles";
import Link from "next/link";

interface IWeatherDay {
    weatherForecastItem: IWeatherForecastItem
}

export const WeatherDay = ({weatherForecastItem}: IWeatherDay) => {
    return (<WeatherDayWrapper>
        <WeatherDayItem>Date: {weatherForecastItem.dt_txt}</WeatherDayItem>
        <WeatherDayItem>Temperature: {weatherForecastItem.main.temp}°С</WeatherDayItem>
        <WeatherDayItem>Pressure: {weatherForecastItem.main.pressure}</WeatherDayItem>
        <WeatherDayItem><Link href={`/weather/${weatherForecastItem.dt}`}>
            <button>Details</button>
        </Link></WeatherDayItem>
    </WeatherDayWrapper>);
}