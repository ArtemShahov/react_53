/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
// import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styles from './style.js';
import Board from '../Board';
import Loader from '../../Loader/Loader.jsx';
import selectors from './selectors.js';
import actions from './actions.js';
// import tasks from '../../../tasks';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function KanbanBoard(props) {
  // const [data, setData] = useState({});
  const { loadTasks, data, changeTask } = props;
  useEffect(() => {
    loadTasks();
  }, []);

  // const onDragEnd = (result) => {
  //   //
  // };

  function handlerDragEnd(result) {
    if (result.destination) changeTask(result);
  }

  return (
    <DragDropContext onDragEnd={handlerDragEnd}>
      {data?.columnOrder ? (
        <div className={classes.mainBoard}>
          {data.columnOrder.map((column) => {
            const { id, title, tasksId } = data.columns[column];
            const columnId = data.columns[column].id;
            return (
              <Board
                key={id}
                columnId={columnId}
                title={title}
                tasks={tasksId.map((task) => data.tasks[task])}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  data: selectors.getTasks(state),
});

export default connect(mapStateToProps, { ...actions })(KanbanBoard);
