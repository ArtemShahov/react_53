/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.scss';

function Modal(props) {
  const { children, isVisible, toggleModal } = props;

  return (
    <div className={styles.overlay + ' ' + (isVisible ? styles.active : '')}>
      <div className={styles.modal} onClick={toggleModal} />
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}

export default Modal;
