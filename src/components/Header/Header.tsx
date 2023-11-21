import React from 'react';
import {CallbackFunction} from "../../types/types";
import Search from "../Search/Search";

interface IHeader {
    getForecast: CallbackFunction,
    onSearchType: CallbackFunction,
}

const Header = ({getForecast, onSearchType}: IHeader) => {
    return (
        <>
            <h1>Summary page</h1>
            <Search onSearchButtonClick={getForecast} onTextInputChange={onSearchType}></Search>
        </>
    );
};

export default Header;