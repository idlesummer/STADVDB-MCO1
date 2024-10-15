import Box from '@mui/material/Box';

import Navbar from 'features/Navigation';
import Sidebar from 'features/Sidebar';

export default function HomePage() {
  return (
    <Box>
      <Sidebar />
      <Navbar />
      <Box>Hello World</Box>
    </Box>
  );
}
