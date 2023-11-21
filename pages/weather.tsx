import React from 'react';
import {AppWrapper, GlobalStyle} from "../src/styles/styles";
import {get5DayForecast, IForecastResponse} from "../src/api/api";
import WeatherList from "../src/components/Weather/WeatherList";
import styled from "styled-components";

interface IState {
    weatherData: IForecastResponse,
}

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
  }
`

const Weather = ({weatherData}: IState) => {
    return (<>
        <GlobalStyle/>
        <AppWrapper>
            <FlexContainer>
                <h1>Weather in Ukraine</h1>
            </FlexContainer>
            <FlexContainer>
                <WeatherList weatherForecastItems={weatherData.list}></WeatherList>
            </FlexContainer>
        </AppWrapper>
    </>);
};

export default Weather;

export async function getStaticProps() {
    const weatherData = await get5DayForecast('Ukraine')
    return {props: {weatherData}};
}