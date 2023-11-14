import React, {useEffect, useState} from 'react';
import {AppWrapper, FlexContainer, GlobalStyle} from "../src/styles/styles";
import {get5DayForecast, IForecastResponse} from "../src/api/api";
import WeatherList from "../src/components/Weather/WeatherList";
import styled from "styled-components";

interface IState {
    weatherDays: IForecastResponse,
    weatherCurrent: any,
    searchText: string,
}

const TextInput = styled.input`
  width: 200px;
  height: 40px;
  padding: 0.5rem;
  margin: 0.5rem;
`

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`

const APIErrorMesssage = styled.div`
  width: 200px;
  height: 40px;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Summary = () => {
    const [state, setState] = useState<IState>({
        weatherDays: {
            city: undefined,
            list: [],
        },
        weatherCurrent: {},
        searchText: '',
    })

    const getForecast = () => get5DayForecast(state.searchText).then((data) => {
        console.log('getForecast', data)
        setState({...state, ...{weatherDays: data}})
    })

    useEffect(() => {
        // getWeather();
    }, [])

    console.log('SUM state', state)
    return (
        <>
            <GlobalStyle/>
            <AppWrapper>
                <FlexContainer>
                    <h1>Summary page</h1>
                    <FlexContainer>
                        <TextInput
                            type="text"
                            placeholder={'Search...'}
                            onChange={(e) => setState({...state, ...{searchText: e.target.value}})}
                        />
                        <StyledButton onClick={getForecast}>Show forecast</StyledButton>
                        {state.weatherDays.cod == 400 &&
                            <APIErrorMesssage><h3>Location not found</h3></APIErrorMesssage>
                        }
                    </FlexContainer>
                </FlexContainer>
                {state.weatherDays.cod == 200 &&
                    <WeatherList weatherForecastItems={state.weatherDays.list}></WeatherList>
                }
            </AppWrapper>
        </>
    );
};

export default Summary;