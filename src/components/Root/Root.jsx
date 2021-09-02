import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';
import Header from '../Header';
import Main from '../Main';
import Side from '../Side';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Root() {
  return (
    <div className={classes.root}>
      <Header />
      <Side />
      <Main />
    </div>
  );
}

export default Root;
