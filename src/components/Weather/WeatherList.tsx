import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {WeatherDay} from "./WeatherDay";
import {IWeatherForecastItem} from "../../api/api";

type WeatherItemsSortType = 'DATE' | 'TEMP' | 'PRES';

interface IWeatherListProps {
    weatherForecastItems: IWeatherForecastItem[],
}

interface IWeatherListState {
    modifiedForecastItems: IWeatherForecastItem[],
    minTemperature: number,
    maxTemperature: number,
    sortBy: WeatherItemsSortType,
}

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`
const WeatherActionWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  padding: 0.5rem;
`
const WeatherActionItem = styled.div`
  display: flex;
  width: 250px;
  padding-left: 0.5rem;
  cursor: pointer;
`
const TemperatureFilterInput = styled.input`
  width: 50px;
  margin-left: 0.5rem;
`

const WeatherList = ({weatherForecastItems}: IWeatherListProps) => {
    const [state, setState] = useState<IWeatherListState>({
        modifiedForecastItems: [],
        minTemperature: 0,
        maxTemperature: 0,
        sortBy: "DATE"
    })

    useEffect(() => {
        const temperatures = weatherForecastItems.map((item => item.main.temp));
        const minTemp = temperatures.length ? Math.min(...temperatures) : 0;
        const maxTemp = temperatures.length ? Math.max(...temperatures) : 0;

        setState({
            ...state,
            modifiedForecastItems: weatherForecastItems,
            minTemperature: minTemp,
            maxTemperature: maxTemp,
        })
    }, [weatherForecastItems])

    useEffect(() => {
        const sortedItems = sortWeatherItems(state.modifiedForecastItems)
        setState({...state, modifiedForecastItems: sortedItems})
    }, [state.sortBy])

    console.log('WeatherList state', state)


    const sortWeatherItems = (weatherItems: IWeatherForecastItem[]) => {
        const sortMap = {
            "DATE": (data: IWeatherForecastItem[]) => data.sort((a, b) => (a.dt_txt > b.dt_txt) ? 1 : ((b.dt_txt > a.dt_txt) ? -1 : 0)),
            "TEMP": (data: IWeatherForecastItem[]) => data.sort((a, b) => a.main.temp - b.main.temp),
            "PRES": (data: IWeatherForecastItem[]) => data.sort((a, b) => a.main.pressure - b.main.pressure),
        }
        return sortMap[state.sortBy](weatherItems)
    }
    const sortByDate = () => setState({...state, sortBy: "DATE"});
    const sortByTemperature = () => setState({...state, sortBy: "TEMP"});
    const sortByPressure = () => setState({...state, sortBy: "PRES"});

    const onMinTempFilterValueChange = (e) => {
        const {value} = e.target;
        setState({...state, minTemperature: value})

    }
    const onMaxTempFilterValueChange = (e) => {
        const {value} = e.target;
        setState({...state, maxTemperature: value})
    }
    const onFilterButtonClick = () => {
        const filteredData = weatherForecastItems.filter(item => {
            return (item.main.temp >= state.minTemperature) && (item.main.temp <= state.maxTemperature)
        })
        const sortedData = sortWeatherItems(filteredData)
        setState({
            ...state,
            modifiedForecastItems: sortedData,
        })
    }


    return (
        <PostsWrapper>
            <WeatherActionWrap>
                <h3>Sort</h3>
                <WeatherActionItem onClick={sortByDate}><button>Sort by Date</button></WeatherActionItem>
                <WeatherActionItem onClick={sortByTemperature}><button>Sort by Temperature</button></WeatherActionItem>
                <WeatherActionItem onClick={sortByPressure}><button>Sort by Pressure</button></WeatherActionItem>
            </WeatherActionWrap>
            <WeatherActionWrap>
                <h3>Filter</h3>
                <WeatherActionItem>Filter by Temperature</WeatherActionItem>
                <WeatherActionItem>
                    <span>Min</span>
                    <TemperatureFilterInput
                        value={state.minTemperature}
                        onChange={onMinTempFilterValueChange}
                    />
                    <button onClick={onFilterButtonClick}>Filter</button>
                </WeatherActionItem>
                <WeatherActionItem>
                    <span>Max</span>
                    <TemperatureFilterInput
                        value={state.maxTemperature}
                        onChange={onMaxTempFilterValueChange}
                    />
                    <button onClick={onFilterButtonClick}>Filter</button>
                </WeatherActionItem>
            </WeatherActionWrap>
            {state.modifiedForecastItems?.map((weatherForecastItem) => {
                return <WeatherDay weatherForecastItem={weatherForecastItem}/>
            })}
        </PostsWrapper>
    );
};

export default WeatherList;