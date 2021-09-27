import React from 'react';
import jss from 'jss';
import PropTypes from 'prop-types';
import preset from 'jss-preset-default';
import styles from './style.js';
import TileTitle from '../TileTitle';
import TileControl from '../TileControl';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function TileHeader({ title }) {
  return (
    <div className={classes['tile-header']}>
      <TileTitle title={title} />
      <TileControl />
    </div>
  );
}

TileHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TileHeader;
