import React, {useState} from 'react';
import {AppWrapper, GlobalStyle} from "../src/styles/styles";
import {get5DayForecast, IForecastResponse} from "../src/api/api";
import WeatherList from "../src/components/Weather/WeatherList";
import styled from "styled-components";

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

const TextInput = styled.input`
  width: 200px;
  height: 40px;
  padding: 0.5rem;
  margin: 0.5rem;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0;
  }
`

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    padding: 0;
    margin: 0;
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

    return (<>
            <GlobalStyle/>
            <AppWrapper>
                <FlexContainer>
                    <h1>Summary page</h1>
                    <SearchContainer>
                        <TextInput
                            type="text"
                            placeholder={'Search...'}
                            onChange={(e) => setState({...state, ...{searchText: e.target.value}})}
                        />
                        <StyledButton onClick={getForecast}>Show forecast</StyledButton>
                    </SearchContainer>
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