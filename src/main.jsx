import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import AppLayout from "./AppLayout";

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter >
        <AppLayout />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
