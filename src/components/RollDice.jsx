import { useState } from 'react'
import styled from 'styled-components'

const RollDice = () => {

    const [currentDice, setCurrentDice] = useState();
    const generateRandomNumber = (min, max)=> {
        return Math.floor(Math.random() * (max - min) + min);
    }

  return (
    <>
        <DiceContainer>
            <div className='dice' onClick={()=> generateRandomNumber(1,6)}>
                <img src='./images/dice/dice_1.png' alt='dice_1' />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    </>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;

    }
    p{
        font-size: 24px;
    }

`;