import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import PropTypes from 'prop-types';
import styles from './style.js';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function TileBody({ description }) {
  return <div className={classes['tile-body']}>{description}</div>;
}

TileBody.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TileBody;
