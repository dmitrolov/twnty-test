import React from 'react';
import styled from "styled-components";
import {WeatherDay} from "./WeatherDay";
import {IWeatherForecastItem} from "../../api/api";

interface IWeatherList {
    weatherForecastItems: IWeatherForecastItem[],
    setWeatherItems: Function,
}

const WeatherList = ({weatherForecastItems, setWeatherItems}: IWeatherList) => {

    const PostsWrapper = styled.div`
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
    `
    const WeatherSortWrap = styled.div`
      display: flex;
    `
    const WeatherSortItem = styled.div`
      display: flex;
      width: 250px;
      padding: 0.5rem
    `
    const sortByDate = () => {
        const sortedObj = weatherForecastItems?.sort((a,b) => (a.dt_txt > b.dt_txt) ? 1 : ((b.dt_txt > a.dt_txt) ? -1 : 0))
        setWeatherItems(sortedObj);
    };
    const sortByTemperature = () => {
        const sortedObj = weatherForecastItems?.sort((a, b) => a.main.temp - b.main.temp)
        setWeatherItems(sortedObj);
    };
    const sortByPressure = () => {
        const sortedObj = weatherForecastItems?.sort((a, b) => a.main.pressure - b.main.pressure)
        setWeatherItems(sortedObj);
    };

    console.log('weatherForecastItems', weatherForecastItems)
    return (
        <PostsWrapper>
            <WeatherSortWrap>
                <WeatherSortItem onClick={sortByDate}>Sort by Date</WeatherSortItem>
                <WeatherSortItem onClick={sortByTemperature}>Sort by Temperature</WeatherSortItem>
                <WeatherSortItem onClick={sortByPressure}>Sort by Pressure</WeatherSortItem>
            </WeatherSortWrap>
            {weatherForecastItems?.map((weatherForecastItem) => {
                return <WeatherDay weatherForecastItem={weatherForecastItem}/>
            })}
        </PostsWrapper>
    );
};

export default WeatherList;