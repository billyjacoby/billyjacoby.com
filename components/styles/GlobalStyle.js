import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-family: "Open Sans", BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;

    ${"" /* CSS Variables */}
    ${"" /* Color Variables */}
    --primaryColor: #1f2641;
    --secondaryColor: #fafafafa;
    --tertiaryColor: #444444;
    --emphasisColor: #30bced;


    background-color: var(--secondaryColor);
    color: var(--primaryColor);
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
