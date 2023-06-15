import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/system";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

const theme = createTheme();

export { GlobalStyles, theme };
