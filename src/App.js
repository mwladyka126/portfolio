import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { store } from "./redux/store";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./components/views/Homepage/Homepage";
import { About } from "./components/views/About/About";
import { Projects } from "./components/views/Projects/Projects";
import { NotFound } from "./components/views/NotFound/NotFound";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2B4C6F" },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
