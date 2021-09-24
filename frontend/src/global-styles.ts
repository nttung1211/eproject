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
  .MuiPagination-root.darkBackground .MuiPaginationItem-text {
    color: #eeeeee;
  }
  .MuiPagination-root.darkBackground .MuiPaginationItem-ellipsis {
    color: #eeeeee;
  }
  .MuiPagination-root.darkBackground .MuiPaginationItem-text.Mui-selected {
    background-color: #eeeeee33;
  }
  .headerMenu {
    margin: 0 10px 0 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
  .headerMenu .MuiPaper-root {
    background: #000;
    color: white;
  }
  .headerMenu .headerArrowIcon {
    width: 10px;
    margin-left: 8px;
    filter: brightness(0) invert(1);
    transform: rotate(90deg);
  }
  .MuiTooltip-tooltip {
    background: rgba(255, 255, 255, .9) !important;
    color: black !important;
  }
`;
