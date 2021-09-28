/* eslint-disable jsx-a11y/control-has-associated-label */
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
import { connect } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import kanbanConfig from '../../../../config/kanbanBoardsConfig';
// import Box from '@mui/material/Box';
import styles from './style.scss';
import actions from '../KanbanBoard/actions';

function NewTaskForm(props) {
  const { toggleModal } = props;

  return (
    <div className={styles.wrap}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <header className={styles.header}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <button
              type="button"
              className={styles.closer}
              onClick={toggleModal}
            >
              <CloseIcon />
            </button>
            Create new task
          </Typography>
        </header>
        <div className={styles.fieldSet}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Title"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Status"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Filled"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
            <Select
              fullWidth
              labelId="Status"
              id="demo-simple-select"
              label="Status"
            >
              {kanbanConfig.map((item) => (
                <MenuItem key={item.status} value={item.status}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={styles.btnWrap}>
            <Button variant="contained">Отправить</Button>
            <Button>Очистить</Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

// NewTaskForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   // tasks: PropTypes.arrayOf.isRequired,
// };

export default connect(null, { ...actions })(NewTaskForm);

/* <TextField
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
<TextField
fullWidth
fullHeight
id="outlined-multiline-flexible"
multiline
rows={4}
label="Outlined"
variant="outlined"
/> */
