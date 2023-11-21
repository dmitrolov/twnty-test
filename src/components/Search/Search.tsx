import React from 'react';
import {SearchContainer} from "../../../pages/summary";
import {CallbackFunction} from "../../types/types";
import styled from "styled-components";

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

interface ISearch {
    onSearchButtonClick: CallbackFunction,
    onTextInputChange: CallbackFunction,
}

const Search = ({onSearchButtonClick, onTextInputChange}: ISearch) => {
    return (
        <>
            <SearchContainer>
                <TextInput
                    type="text"
                    placeholder={'Search...'}
                    onChange={e => onTextInputChange(e)}
                />
                <StyledButton onClick={onSearchButtonClick}>Show forecast</StyledButton>
            </SearchContainer>
        </>
    );
};

export default Search;