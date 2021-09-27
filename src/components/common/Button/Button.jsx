import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

function Button({ text }) {
  return (
    <button type="button" className={styles.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
