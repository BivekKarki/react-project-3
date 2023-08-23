import { useState } from 'react';
import styled from 'styled-components'

const NumberSelector = () => {
    const arrayNumber = [1,2,3,4,5,6];

    const [selectedNumber, setSelectedNumber] = useState();
    // console.log(selectedNumber);
  return (
    <>
    <NumberSelectorCOntainer>
        <div className='flex'>
        {
            arrayNumber.map((value,i) => (
            <Box isSelected={value==selectedNumber} key={i} onClick={() => setSelectedNumber(value)}>{value}</Box>
            ))
        }
        </div>
        <p>Select Number</p>
    </NumberSelectorCOntainer>
    
        
    </>
    
  )
}

export default NumberSelector

const NumberSelectorCOntainer = styled.div`
margin-top: 64px;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
    text-align: end;
    margin-top: 30px;

}
   

`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;

    background-color: ${(props)=> props.isSelected ? "black":"white"};
    color: ${(props)=> props.isSelected ? "white":"black"};
`;