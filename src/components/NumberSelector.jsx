import { useState } from 'react';
import styled from 'styled-components'

const NumberSelector = () => {
    const arrayNumber = [1,2,3,4,5,6];

    const [selectedNumber, setSelectedNumber] = useState();

  return (
    <>
    {
        arrayNumber.map((value,i) => (
        <Box key={i} onClick={() => setSelectedNumber(value)}>{value}</Box>
        ))
    }
        
    </>
    
  )
}

export default NumberSelector

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
`;