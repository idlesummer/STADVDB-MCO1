import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Navigation() {
  return (
    <AppBar elevation={1} position="sticky">
      <Toolbar>
        <span>Logo</span>
        <span>Logo</span>
      </Toolbar>
    </AppBar>
  );
}
