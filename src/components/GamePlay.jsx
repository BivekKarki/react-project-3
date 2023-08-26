import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RollDice from './RollDice'

const GamePlay = () => {
    const  [score, setScore] = useState();
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    
   
    const generateRandomNumber = (min, max)=> {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = ()=> {
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomNumber);
    }
  return (
    <>
        <MainContainer>
            <div className='top_section'>
                <TotalScore/>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice}/>
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