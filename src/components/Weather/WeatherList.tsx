import React from 'react';
import styled from "styled-components";
import {WeatherDay} from "./WeatherDay";
import {IWeatherForecastItem} from "../../api/api";


const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
interface IWeatherList {
    weatherForecastItems: IWeatherForecastItem[]
}
const WeatherList = ({weatherForecastItems}: IWeatherList) => {
    console.log(weatherForecastItems)
    return (
        <PostsWrapper>
            {weatherForecastItems.map((weatherForecastItem) => {
                return <WeatherDay weatherForecastItem={weatherForecastItem}/>
            })}
        </PostsWrapper>
    );
};

export default WeatherList;