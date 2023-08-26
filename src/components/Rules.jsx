import React from 'react'
import styled from "styled-components"
const Rules = () => {
  return (
    <>
        <RulesContainer>
            <h1>How to play dice game</h1>

            <p>Select any number<br/>Click on dice image<br/> after click on  dice  if selected number is equal to dice number you will get same point as dice <br />if you get wrong guess then  2 point will be dedcuted </p>
            
        </RulesContainer>
    </>
  )
}

export default Rules

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    max-width: 800px;
    padding: 20px;
    margin-top: 64px;
    border-radius: 10px;

    h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 24px;

    }
 
 p{
    font-size: 16px;
    padding-bottom: 4px;
 }
`;