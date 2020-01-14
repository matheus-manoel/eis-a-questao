import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import App from './components/App';

const theme = createMuiTheme({
   palette: {
      primary: {
         light: '#DCEDC8',
         main: '#8BC34A',
         dark: '#689F38'
      },
      secondary: {
        main: '#CDDC39',
      },
   },
   typography: { 
      useNextVariants: true
   }
});

ReactDOM.render(
  <MuiThemeProvider theme = { theme }>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
