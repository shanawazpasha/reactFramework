import { createTheme } from '@mui/material/styles';

export const DefaultTheme = createTheme({
    palette: {
      primary: {
        main: '#141414',
        light: '#68737d',
        dark: '#1A1D21',
        contrastText: '#bac1ca',
      },
      secondary: {
        main: '#0277bd',
      },
      background: {
        paper: '#fff',
        default: '#fff',
      },
      text: {
        secondary: 'rgba(0,0,0,0.7)',
        primary: '#312e2e',
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontSize: 24,
        fontWeight: 400,
        fontFamily: '"sharp-grotesk-medium-20", "Helvetica", "Arial", sans-serif',
      },
      h3: {
        fontSize: 18,
        fontFamily: '"sharp-grotesk-medium-20", "Helvetica", "Arial", sans-serif',
      },
      h4: {
        fontFamily: '"Metric", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
      },
      button: {
        fontFamily: '"Sharp Grotesk", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        fontWeight: 400,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 100,
          },
        },
      },
    },
  });

  export default DefaultTheme;