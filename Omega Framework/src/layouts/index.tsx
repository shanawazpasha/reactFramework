import { ReactNode, FC } from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from 'components/header';
import Theme from "../themes/default.theme";


interface ThemeProviderProps {
  children: ReactNode;
}


const CoreLayout: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default CoreLayout;

