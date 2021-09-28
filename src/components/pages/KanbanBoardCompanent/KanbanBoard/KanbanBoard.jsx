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
import Loader from '../../../common/Loader/Loader';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal';
import NewTaskForm from '../NewTaskForm';

function KanbanBoard(props) {
  // const [data, setData] = useState({});
  const { loadTasks, data, changeTask, isLoading, toggleModal, isVisible } =
    props;
  useEffect(() => {
    if (!data.tasks) loadTasks();
  }, []);

  // const onDragEnd = (result) => {
  //   //
  // };

  function handlerOnClick() {
    console.log('1');
    toggleModal();
  }

  function handlerDragEnd(result) {
    if (result.destination) changeTask(result);
    console.log('kanban', result);
  }

  return (
    <div className={styles.mainBoardWrap}>
      <DragDropContext onDragEnd={handlerDragEnd}>
        <div className={styles.header}>
          <Button onClick={handlerOnClick} text="Add new task" />
        </div>
        <div className={styles.mainBoard}>
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
        <Loader isLoading={isLoading} />
        <Modal isVisible={isVisible} toggleModal={toggleModal}>
          <NewTaskForm />
        </Modal>
      </DragDropContext>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: selectors.getTasks(state),
  isLoading: selectors.getIsLoading(state),
  isVisible: selectors.checkVisible(state),
});

export default connect(mapStateToProps, { ...actions })(KanbanBoard);
