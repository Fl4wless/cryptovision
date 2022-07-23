import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;


  }

  * {
    box-sizing: border-box;
  }
  

  #__next, html, body{
    height: 100%;
    min-height: 100%;
  }

`;

export default GlobalStyle;
