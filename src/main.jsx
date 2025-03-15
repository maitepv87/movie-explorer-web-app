import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { store } from './store'
import { Provider } from 'react-redux'
import AppLayout from "./AppLayout";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <BrowserRouter >
          <AppLayout />
        </BrowserRouter>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
