import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
  }

  body,
  html {
    background-color: #f5f5f5;
    color: #222;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  a, tcxspan {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
