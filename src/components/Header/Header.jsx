import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Header() {
  return <header className={classes.header} />;
}

export default Header;
