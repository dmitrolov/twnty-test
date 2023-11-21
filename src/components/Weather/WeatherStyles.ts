import styled from "styled-components";

export const WeatherActionWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  padding: 0.5rem;
`
export const WeatherActionItem = styled.div`
  display: flex;
  width: 150px;
  padding-left: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 0.5rem;
  }
`
export const TemperatureFilterInput = styled.input`
  width: 50px;
  margin-left: 0.5rem;
`

export const WeatherDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

export const WeatherDayItem = styled.div`
  display: flex;
  width: 190px;
`

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WeatherListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
