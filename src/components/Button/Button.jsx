import React from 'react';
import PropTypes from 'prop-types';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Button({ text }) {
  return (
    <button type="button" className={classes.btn}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
