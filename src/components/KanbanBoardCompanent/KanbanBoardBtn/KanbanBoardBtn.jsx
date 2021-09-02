import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();
function KanbanBoardBtn() {
  return (
    <button type="button" className={classes['kanban-board']}>
      Hi
    </button>
  );
}

export default KanbanBoardBtn;
