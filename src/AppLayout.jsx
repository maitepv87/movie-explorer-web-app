import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppNavBar from './components/AppNavBar';
import AppContent from './components/AppContent';

const AppLayout = (props) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppNavBar />
      <div>
        <AppContent />
      </div>
    </AppTheme>
  );
}

export default AppLayout; 
