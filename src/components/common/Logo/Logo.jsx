/* eslint-disable react/prop-types */
import React from 'react';
import styles from './style.scss';

function Logo(props) {
  const { svg } = props;
  return <img className={styles.logo} src={svg} alt="icon" />;
}

export default Logo;
