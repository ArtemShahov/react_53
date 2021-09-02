import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './style.js';
import TileHeader from '../TileHeader';
import TileBody from '../TileBody';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Tile({ title, description }) {
  return (
    <div className={classes.tile}>
      <TileHeader title={title} />
      <TileBody description={description} />
    </div>
  );
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Tile;
