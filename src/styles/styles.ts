import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: normal;
    justify-content: space-between;
  }
`