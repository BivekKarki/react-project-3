import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'

const GamePlay = () => {
  return (
    <>
        <MainContainer>
            <div className='top_section'>
                <TotalScore/>
                <NumberSelector/>
            </div>
        </MainContainer>
    </>
  )
}

export default GamePlay

const MainContainer = styled.div`
max-width: 1280px;
margin: 0 auto;

    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
`;