import React from "react";
import { styled, css } from "styled-components";

const TextInputContainer = styled.div`
  max-width: 20rem;
`;

const TextInputLabel = styled.label`
  position: relative;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 0.8rem;
  background-color: white;
  color: black;
  padding: 0.2rem;
`;

const TextInputField = styled.input`
  width: 18rem;
  padding: 0.5rem 1rem;
  border: 2px solid #b0b0b0;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    font-size: 0.8rem;
  }
  ${({ isInvalid }) =>
  isInvalid &&
    css`
      border-color: red;
    `}
`;

const TextInput = ({ title, type, placeHolder, validate, value, ...restProps }) => {
  const isInvalid = validate && !validate(value);

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextInputContainer>
      <TextInputLabel>{title}</TextInputLabel>
      <TextInputField type={type} placeholder={placeHolder} value={value} isInvalid={isInvalid} {...restProps} />
    </TextInputContainer>
  );
};

export default TextInput;
