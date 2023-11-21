import React, {useEffect, useState} from 'react';
import {WeatherDay} from "./WeatherDay";
import {IWeatherForecastItem} from "../../api/api";
import WeatherAside from "./WeatherAside";
import {Aside, PostsWrapper, WeatherListWrap} from "./WeatherStyles";

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

const WeatherList = ({weatherForecastItems}: IWeatherListProps) => {
    const [state, setState] = useState<IWeatherListState>({
        modifiedForecastItems: [], minTemperature: 0, maxTemperature: 0, sortBy: "DATE"
    })

    useEffect(() => {
        const filteredData = weatherForecastItems.filter(item => {
            return (item.main.temp >= state.minTemperature) && (item.main.temp <= state.maxTemperature)
        })

        const sortMap = {
            "DATE": (data: IWeatherForecastItem[]) => data.sort((a, b) => (a.dt_txt > b.dt_txt) ? 1 : ((b.dt_txt > a.dt_txt) ? -1 : 0)),
            "TEMP": (data: IWeatherForecastItem[]) => data.sort((a, b) => a.main.temp - b.main.temp),
            "PRES": (data: IWeatherForecastItem[]) => data.sort((a, b) => a.main.pressure - b.main.pressure),
        }
        const displayItems = sortMap[state.sortBy](filteredData)

        setState({
            ...state, modifiedForecastItems: [...displayItems],
        })
    }, [weatherForecastItems, state.minTemperature, state.maxTemperature, state.sortBy])

    useEffect(() => {
        const temperatures = weatherForecastItems.map((item => item.main.temp));
        const minTemp = temperatures.length && Math.min(...temperatures);
        const maxTemp = temperatures.length && Math.max(...temperatures);

        setState({
            ...state, minTemperature: minTemp, maxTemperature: maxTemp,
        })

    }, [weatherForecastItems]);

    const sortByDate = () => setState({...state, sortBy: "DATE"});
    const sortByTemperature = () => setState({...state, sortBy: "TEMP"});
    const sortByPressure = () => setState({...state, sortBy: "PRES"});

    const onMinTempFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setState({...state, minTemperature: Number.parseInt(value)})
    }
    const onMaxTempFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setState({...state, maxTemperature: Number.parseInt(value)})
    }

    return (
        <PostsWrapper>
            <Aside>
                <WeatherAside sortByDate={sortByDate}
                              sortByTemperature={sortByTemperature}
                              sortByPressure={sortByPressure}
                              onMinTempFilterValueChange={onMinTempFilterValueChange}
                              onMaxTempFilterValueChange={onMaxTempFilterValueChange}
                              minFilterValue={state.minTemperature}
                              maxFilterValue={state.maxTemperature}
                />
            </Aside>
            <WeatherListWrap>
                {state.modifiedForecastItems?.map((weatherForecastItem) =>
                    <WeatherDay key={weatherForecastItem.dt} weatherForecastItem={weatherForecastItem}/>)
                }
            </WeatherListWrap>
        </PostsWrapper>
    );
};

export default WeatherList;