import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar
      position='absolute'
      sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      enableColorOnDark={true}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          Omega Framework
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
