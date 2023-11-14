import React, {useEffect, useState} from 'react';
import {AppWrapper, GlobalStyle} from "../src/styles/styles";
import {get5DayForecast, getCurrentWeather, IForecastResponse} from "../src/api/api";
import WeatherList from "../src/components/Weather/WeatherList";

interface IState {
    weatherDays: IForecastResponse,
    weatherCurrent: any,
    searchText: string,
}

const Summary = () => {
    const [state, setState] = useState<IState>({
        weatherDays: {
            city: undefined,
            list: []
        },
        weatherCurrent: {},
        searchText: '',
    })

    const getWeather = () => getCurrentWeather(state.searchText).then((data) => {
        console.log(data)
        // setState({posts: data.posts})
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
                <h1>Summary page</h1>
                <input
                    type="text"
                    placeholder={'Search...'}
                    onChange={(e) => setState({...state, ...{searchText: e.target.value}})}
                />
                <button onClick={getWeather}>Show current weather</button>
                <button onClick={getForecast}>Show forecast</button>
                <WeatherList weatherForecastItems={state.weatherDays.list}></WeatherList>
            </AppWrapper>
        </>
    );
};

export default Summary;