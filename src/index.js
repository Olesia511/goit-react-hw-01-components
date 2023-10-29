import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#2E3034',
    green: '#6F7239',
    yellowGreen: '#DFE27C',
    white: '#E1D5D9',
    whiteIce: '#f9feff',
    burgundy: '#683142',
    brown: '#615265',
    lightBrown: '#9E8279',
    pink: '#a590a2',
    purple: '#431D32',
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  fontSize: {
    fsP: '12px',
    fsH4: '20px',
    fsH3: '24px',
    fsH2: '28px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
