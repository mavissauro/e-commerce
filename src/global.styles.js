import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans Condensed";
    padding: 20px 80px;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 800px){
      padding: 10px; 
    }

  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
