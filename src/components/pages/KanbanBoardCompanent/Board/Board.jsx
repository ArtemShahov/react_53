/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import styles from './style.scss';
import Tile from '../TileComponent/Tile';

function Board({ title, tasks, columnId }) {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div className={styles.board}>
          <h2 className={styles.title}>{title}</h2>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.boardTasks}
          >
            {tasks.map((el, index) => (
              <Tile
                key={el.id}
                title={el.title}
                description={el.content}
                id={el.id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

Board.propTypes = {
  title: PropTypes.string.isRequired,
  // tasks: PropTypes.arrayOf.isRequired,
};
export default Board;
