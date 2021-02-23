import React from 'react';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import BaseContainer from '../../containers/BaseContainer';

import './App.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BaseContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
