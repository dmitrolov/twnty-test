import React, {useState} from 'react';
import {AppWrapper, GlobalStyle} from "../src/styles/styles";
import {get5DayForecast, IForecastResponse} from "../src/api/api";
import WeatherList from "../src/components/Weather/WeatherList";
import styled from "styled-components";
import Header from "../src/components/Header/Header";

interface IState {
    weatherDays: IForecastResponse,
    searchText: string,
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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const APIErrorMessage = styled.div`
  width: 200px;
  height: 40px;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
  }
`

const Summary = () => {
    const [state, setState] = useState<IState>({
        weatherDays: {
            city: undefined, list: [],
        }, searchText: '',
    })

    const getForecast = () => get5DayForecast(state.searchText).then((data) => {
        setState({...state, ...{weatherDays: data}})
    })

    const onSearchType = (e) => setState({...state, ...{searchText: e.target.value}})

    return (<>
            <GlobalStyle/>
            <AppWrapper>
                <FlexContainer>
                    <Header getForecast={getForecast} onSearchType={onSearchType}></Header>
                </FlexContainer>
                <FlexContainer>
                    {!state.weatherDays.cod &&
                        <h3>Type some city or country into the search field (e.g. {'Ukraine'})</h3>}
                    {state.weatherDays.cod == 400 && <APIErrorMessage><h3>Location not found</h3></APIErrorMessage>}
                    {state.weatherDays.cod == 200 &&
                        <WeatherList weatherForecastItems={state.weatherDays.list}></WeatherList>}
                </FlexContainer>
            </AppWrapper>
        </>);
};

export default Summary;