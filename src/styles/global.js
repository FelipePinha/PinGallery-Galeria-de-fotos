import { createGlobalStyle } from "styled-components";

// CSS reset
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Serif';
    }
`;

export default GlobalStyle;
