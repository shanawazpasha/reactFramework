import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      enableColorOnDark={true}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
