import React from 'react';
import {AppWrapper, GlobalStyle} from "../styles/styles";
import styled from "styled-components";
import Link from "next/link";

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
`

const ApiNameSpan = styled.span`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  padding-bottom: 0.5rem;
`

const CTAButton = styled.button`
  width: 200px;
  height: 40px;
`

const Index = () => {
    return (
        <>
            <GlobalStyle/>
            <AppWrapper>
                <MainTitle>
                    <ApiNameSpan className="api-name"><a href="https://dummyjson.com">dummyJSON</a></ApiNameSpan>
                    <Link href={"/summary"}>
                        <CTAButton className="summary-page">Go to summary page</CTAButton>
                    </Link>
                </MainTitle>
            </AppWrapper>
        </>
    );
};

export default Index;