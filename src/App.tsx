import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from 'styles/theme';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { MainPage } from 'pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
