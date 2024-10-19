import AppBar from '@mui/material/AppBar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const styles = {
  appbar: {
    pl: '240px',
  },
};

export default function Navigation() {
  return (
    <AppBar 
      elevation={0} 
      position="fixed" 
      open={true}
      sx={styles.appbar}
    >
      <Toolbar>
        <ListItemText>
          <Typography variant="h3">
            Permanent Drawer
          </Typography>
        </ListItemText>
      </Toolbar>
    </AppBar>
  );

  
}
