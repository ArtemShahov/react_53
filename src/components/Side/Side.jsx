import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';
import Button from '../Button/Button.jsx';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <aside className={classes.side}>
      <Button text="Btn" />
    </aside>
  );
}

export default Side;
