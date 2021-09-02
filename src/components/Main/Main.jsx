import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';
import KanbanBoard from '../KanbanBoardCompanent/KanbanBoard';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <main className={classes.main}>
      <KanbanBoard />
    </main>
  );
}

export default Main;
