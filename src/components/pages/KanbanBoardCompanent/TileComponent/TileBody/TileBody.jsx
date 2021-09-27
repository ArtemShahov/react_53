import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function TileBody({ description }) {
  return <div className={styles.tileBody}>{description}</div>;
}

TileBody.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TileBody;
