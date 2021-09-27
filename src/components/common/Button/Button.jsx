/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function Button(props) {
  const { text, onClick } = props;
  return (
    <button type="button" onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
