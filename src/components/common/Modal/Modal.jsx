/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.scss';

function Loader(props) {
  const { children } = props;
  return <div className={styles.modal}>{children}</div>;
}

export default Loader;
