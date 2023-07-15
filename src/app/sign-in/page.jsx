"use client";

import React from "react";
import TextInput from "@/components/TextInput";
import { styled } from "styled-components";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInButtonClick = async () => {
    const formData = {
      email: email,
      password: password,
    };

    await Axios.post(
      "http://localhost:8000/api/v1/auth/signin",
      formData
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(email,password);
  };

  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <TextInput
        title="E-mail"
        type="email"
        placeHolder="Enter Your E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        title="Password"
        type="Password"
        placeHolder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ForgotPassword>
        Forgot Password?
      </ForgotPassword>
      <Button onClick={handleSignInButtonClick}>Sign In</Button>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 3rem;
`;

const ForgotPassword = styled.p`
font-size:0.8rem;
&:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

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

export default SignIn;
