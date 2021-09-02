import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
// import PropTypes from 'prop-types';
import styles from './style.js';
import Board from '../Board';
import tasks from '../../../tasks';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

class KanbanBoard extends React.Component {
  constructor() {
    super();
    this.boards = [];
    tasks.forEach((task) => {
      if (!this.boards.includes(task.status)) {
        this.boards.push(
          <Board
            title={task.title}
            description={task.description}
            className={task.status}
          />,
        );
      }
    });
    this.wrapper = <div className={classes['kanban-board']}>{this.boards}</div>;
  }

  render() {
    return this.wrapper;
  }
}

// KanbanBoard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// }

export default KanbanBoard;
