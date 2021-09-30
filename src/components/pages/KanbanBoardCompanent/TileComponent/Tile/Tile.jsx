/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import styles from './style.scss';
import TileHeader from '../TileHeader';
import TileBody from '../TileBody';

function Tile(props) {
  const { title, description, id, index, columnId } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={styles.tile}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TileHeader title={title} id={id} columnId={columnId} />
          <TileBody description={description} />
        </div>
      )}
    </Draggable>
  );
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default Tile;
