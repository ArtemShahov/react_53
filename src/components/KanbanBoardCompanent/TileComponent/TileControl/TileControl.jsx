import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';
import Gear from './assets/Gear';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function TileControl() {
  return <Gear className={classes['tile-control']} />;
}

export default TileControl;
