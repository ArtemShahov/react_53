/* eslint-disable react/prop-types */
import React from 'react';
import jss from 'jss';
import PropTypes from 'prop-types';
import preset from 'jss-preset-default';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
import actions from '../../KanbanBoard/actions';
import styles from './style.js';
import TileTitle from '../TileTitle';
import TileControl from '../TileControl';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function TileHeader(props) {
  const { title, deleteTask, id, columnId } = props;

  function handlerClick() {
    deleteTask(id, columnId);
  }

  return (
    <div className={classes['tile-header']}>
      <TileTitle title={title} />
      <div>
        <DeleteIcon onClick={handlerClick} />
        <TileControl />
      </div>
    </div>
  );
}

TileHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(null, { ...actions })(TileHeader);
