import { createGlobalStyle } from "styled-components";
import backgroundImage from "./backgroundImage.jpg"

export const GlobalStyled = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, :after, ::before {
    box-sizing: inherit;
  }

  body {
    color: #fff;
    background-color: hsl(210, 24%, 15%);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background-image: url("${backgroundImage}");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;