import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

import { themeConfig } from 'config/theme';
import HomePage from 'features/HomePage';
import NotFoundPage from 'features/NotFoundPage';


export default function App() {  
  const theme = createTheme(themeConfig);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
