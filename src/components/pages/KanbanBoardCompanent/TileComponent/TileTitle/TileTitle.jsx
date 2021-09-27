import React from 'react';
import PropTypes from 'prop-types';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function TileTitle({ title }) {
  return <h3 className={classes['tile-title']}>{title}</h3>;
}

TileTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TileTitle;
