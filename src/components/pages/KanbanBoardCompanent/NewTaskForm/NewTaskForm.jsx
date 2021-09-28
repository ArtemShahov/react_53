/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from './style.scss';

function NewTaskForm() {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <header className={styles.header}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          <div className={styles.closer} />
          Create new task
        </Typography>
      </header>
      <div className={styles.wrap}>
        <div className={styles.column}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Filled"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Standard"
            variant="outlined"
          />
        </div>
        <div className={styles.column}>
          <TextField
            fullWidth
            fullHeight
            id="outlined-multiline-flexible"
            multiline
            rows={4}
            label="Outlined"
            variant="outlined"
          />
        </div>
      </div>
    </Paper>
  );
}

// NewTaskForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   // tasks: PropTypes.arrayOf.isRequired,
// };

export default NewTaskForm;
