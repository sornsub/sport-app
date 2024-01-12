import { createTheme } from "@mui/material";
import InterRegular from "/fonts/Inter-Regular.ttf"

export const theme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      light: '#EB8B8A',
      main: '#E76F6D',
      dark: '#A14D4C',
      white: '#fff',
    },
    secondary: {
      light: '#8AB9EB',
      main: '#6da8e7',
      dark: '#4C75A1',
      contrastText: '#000',
    },
    otherColor:{
      main:"#999"
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})