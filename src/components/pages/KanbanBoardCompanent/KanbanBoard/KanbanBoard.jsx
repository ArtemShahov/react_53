/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styles from './style.scss';
import Board from '../Board';
import selectors from './selectors.js';
import actions from './actions.js';
import Loader from '../../../Loader/Loader';

function KanbanBoard(props) {
  // const [data, setData] = useState({});
  const { loadTasks, data, changeTask, isLoading } = props;
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
      <div className={styles.mainBoard}>
        {data.tasks
          ? data.columnOrder.map((column) => {
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
            })
          : ''}
      </div>
      <Loader isLoading={isLoading} />
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  data: selectors.getTasks(state),
  isLoading: selectors.getIsLoading(state),
});

export default connect(mapStateToProps, { ...actions })(KanbanBoard);
