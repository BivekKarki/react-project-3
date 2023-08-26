import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    border-radius: 5px;
    background: #000;
    color: #fff;
    font-size: 16px;
    min-width: 220px;
    border: 1px solid transparent;
    transition: all 0.4s ease-in;

    &:hover{
        background-color: #ffffff;
        border: 1px solid #000;
        color: #000;
        cursor: pointer;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: #ffffff;
    border: 1px solid #000;
    color: #000;
    cursor: pointer;

    &:hover{
      padding: 10px 18px;
      border-radius: 5px;
      background: #000;
      color: #fff;
      font-size: 16px;
      min-width: 220px;
      border: 1px solid transparent;
      transition: all 0.4s ease-in;
    }
    
`;