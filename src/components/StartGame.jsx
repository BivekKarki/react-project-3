import React from 'react'
import styled from "styled-components"

const StartGame = () => {
  return (
    <>
    <Container >
        <div><img src='./images/dices1.png' alt='dices1.png'/></div>
        <div className='maintext'>
            <h1>DICE GAME</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
        
    </>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
`;

const Button = styled.button`
    padding: 10px 18px;
    border-radius: 5px;
    background: #000;
    color: #fff;
    font-size: 16px;
`;