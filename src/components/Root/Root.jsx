import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './style.js';
import Header from '../Header';
import Main from '../Main';
import Side from '../Side';
import store from '../../store';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <Header />
          <Side />
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default Root;
