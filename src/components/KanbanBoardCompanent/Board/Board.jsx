import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './style.js';
import Tile from '../TileComponent/Tile';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Board({ title, description }) {
  return (
    <div className={classes.board}>
      <Tile title={title} description={description} />
    </div>
  );
}

Board.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Board;
