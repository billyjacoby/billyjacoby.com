import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-family: "Open Sans", BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  p {
  }
`;

export default GlobalStyle;
