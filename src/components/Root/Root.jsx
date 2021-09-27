import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './style.scss';
import Header from '../base/Header';
import Main from '../base/Main';
import Side from '../base/Side';
import store from '../../store';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.root}>
          <Header />
          <Side />
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default Root;
