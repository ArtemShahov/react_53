/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import Logo from '../../common/Logo';
import styles from './style.scss';
import reactIcon from '../../../assets/atomic-structure.svg';

function Header() {
  return (
    <header className={styles.header}>
      <Logo svg={reactIcon} />
    </header>
  );
}

export default Header;
