import React from "react";
import styled from "styled-components";
import {IWeatherForecastItem} from "../../api/api";

const WeatherDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

const WeatherDayItem = styled.div`
  display: flex;
  width: 190px;
`

interface IWeatherDay {
    weatherForecastItem: IWeatherForecastItem
}

export const WeatherDay = ({weatherForecastItem}: IWeatherDay) => {
    return (
        <WeatherDayWrapper>
            <WeatherDayItem>Date: {weatherForecastItem.dt_txt}</WeatherDayItem>
            <WeatherDayItem>Temperature: {weatherForecastItem.main.temp}°С</WeatherDayItem>
            <WeatherDayItem>Pressure: {weatherForecastItem.main.pressure}</WeatherDayItem>
        </WeatherDayWrapper>
    );
}