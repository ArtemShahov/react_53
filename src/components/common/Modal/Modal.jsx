/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.scss';

function Modal(props) {
  const { children, isVisible, toggleModal } = props;
  return (
    <div
      onClick={toggleModal}
      className={styles.modal + ' ' + (isVisible ? styles.active : '')}
    >
      {children}
    </div>
  );
}

export default Modal;
