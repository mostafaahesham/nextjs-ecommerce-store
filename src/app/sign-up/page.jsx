"use client";

import React from "react";
import TextInput from "@/components/TextInput";
import { styled } from "styled-components";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const validateName = (val) => {
    return /^[a-zA-Z]+$/.test(val);
  };
  
  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };
  
  const validatePassword = (val) => {
    return val.length >= 8;
  };
  
  const validatePasswordConfirm = (val) => {
    return password == passwordConfirm && passwordConfirm.length != 0;
  };
  
  const validatePhoneNumber = (value) => {
    return /^(01)[0-9]{9}$/.test(value);
  };

  const handleSignUpButtonClick = async () => {
    const formData = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      phoneNumber: phoneNumber,
    };

    await Axios.post(
      "https://e-shop-app-gf69.onrender.com/api/v1/auth/signup",
      formData
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(name,email,password,passwordConfirm,phoneNumber);
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <TextInput
        title="Name"
        type="string"
        placeHolder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        validate={validateName}
      />
      <TextInput
        title="E-mail"
        type="email"
        placeHolder="Enter Your E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        validate={validateEmail}
      />
      <TextInput
        title="Password"
        type="Password"
        placeHolder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        validate={validatePassword}
      />
      <TextInput
        title="Confirm Password"
        type="Password"
        placeHolder="Confirm Your Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        validate={validatePasswordConfirm}
      />
      <TextInput
        title="Phone Number"
        type="number"
        placeHolder="Enter Your Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        validate={validatePhoneNumber}
      />
      <Button onClick={handleSignUpButtonClick}>Sign Up</Button>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 3rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  width: 10rem;
  height: 2rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    top: -1rem;
    background-color: #303030;
  }
  margin: 1rem;
`;

export default Test;
