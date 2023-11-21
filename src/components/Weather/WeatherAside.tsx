import React from 'react';
import {TemperatureFilterInput, WeatherActionItem, WeatherActionWrap} from "./WeatherStyles";

interface IWeatherAside {
    minFilterValue: number,
    maxFilterValue: number,
    sortByDate: CallableFunction,
    sortByTemperature: CallableFunction,
    sortByPressure: CallableFunction,
    onMinTempFilterValueChange: CallableFunction,
    onMaxTempFilterValueChange: CallableFunction,
}

const WeatherAside = ({
                          sortByDate,
                          sortByTemperature,
                          sortByPressure,
                          onMinTempFilterValueChange,
                          onMaxTempFilterValueChange,
                          minFilterValue,
                          maxFilterValue,
                      }: IWeatherAside) => {

    return (
        <>
            <WeatherActionWrap>
                <h3>Sort</h3>
                <WeatherActionItem onClick={(e) => sortByDate(e)}>
                    <button>Sort by Date</button>
                </WeatherActionItem>
                <WeatherActionItem onClick={(e) => sortByTemperature(e)}>
                    <button>Sort by Temperature</button>
                </WeatherActionItem>
                <WeatherActionItem onClick={(e) => sortByPressure(e)}>
                    <button>Sort by Pressure</button>
                </WeatherActionItem>
            </WeatherActionWrap>
            <WeatherActionWrap>
                <h3>Filter</h3>
                <WeatherActionItem>Filter by Temperature</WeatherActionItem>
                <WeatherActionItem>
                    <span>Min</span>
                    <TemperatureFilterInput
                        value={minFilterValue}
                        onChange={(e) => onMinTempFilterValueChange(e)}
                        type={'number'}
                    />
                </WeatherActionItem>
                <WeatherActionItem>
                    <span>Max</span>
                    <TemperatureFilterInput
                        value={maxFilterValue}
                        onChange={(e) => onMaxTempFilterValueChange(e)}
                        type={'number'}
                    />
                </WeatherActionItem>
            </WeatherActionWrap>
        </>
    );
};

export default WeatherAside;