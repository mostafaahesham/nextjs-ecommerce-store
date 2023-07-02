"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
      margin: 0.5rem;
    }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
