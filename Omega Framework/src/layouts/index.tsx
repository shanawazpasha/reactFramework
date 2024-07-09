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
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box component="header" sx={{ position: 'fixed', width: '100%', zIndex: 1 }}>
          <Header />
        </Box>
        <Box component="main" sx={{ flex: '1 0 auto', mt: '64px' }}> {/* Adjust mt value to header height */}
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CoreLayout;

