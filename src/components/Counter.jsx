import React from "react";
import { styled, css } from "styled-components";
import { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(1);

  const handleDecrement = () => setCounterValue((prevValue) => Math.max(prevValue - 1,1));

  const handleIncrement = () => setCounterValue((prevValue) => prevValue + 1);
  
  return (
    <CounterStyle>
      <Button onClick={handleDecrement}>-</Button>
      <Count value={counterValue} ></Count>
      <Button onClick={handleIncrement}>+</Button>
    </CounterStyle>
  );
};

const CounterStyle = styled.div`
display:flex;
flex-direction:row
width:1rem;
height:3rem;
justify-content: space-between;
border-radius:1.5rem;
background-color: #E0E0E0
`;

const Button = styled.button`
  background-color: transparent;
  border-radius:1rem;
  width: 2rem;
  border: None;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #d0d0d0;
  }
`;

const Count = styled.input`
  width: 3rem;
  border: None;
  outline: None;
  background-color: transparent;
  font-size: 1.5rem;
  text-align: center;
`;

export default Counter;
