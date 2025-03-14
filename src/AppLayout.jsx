import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import { AppNavBar, AppContent } from './layouts'

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
