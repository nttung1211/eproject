import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
  }
  textarea:focus, input:focus{
    outline: none;
  }
  .form {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
  }
  .d-flex {
    display: flex;
  }
`;
