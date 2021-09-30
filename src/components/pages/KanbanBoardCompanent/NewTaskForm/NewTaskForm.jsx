/* eslint-disable react/jsx-no-bind */
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
import selectors from '../KanbanBoard/selectors';
import kanbanConfig from '../../../../config/kanbanBoardsConfig';
// import Box from '@mui/material/Box';
import styles from './style.scss';
import actions from '../KanbanBoard/actions';

function NewTaskForm(props) {
  const { toggleModal, addTask, title, content, assign, status, changeInput } =
    props;
  function handlerClick() {
    addTask({
      taskData: {
        title,
        content,
      },
      statusData: status,
    });
  }

  const handlerChange = (field, value) => {
    changeInput(field, value);
    // console.log(field, value);
  };

  const useChangeTextField = (field, fieldName) => {
    return {
      value: field,
      onChange: (event) => handlerChange(fieldName, event.target.value),
    };
  };

  const titleField = useChangeTextField(title, 'title');
  const contentField = useChangeTextField(content, 'content');
  const assignField = useChangeTextField(assign, 'assign');
  const statusField = useChangeTextField(status, 'status');

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
            {...titleField}
            fullWidth
            id="filled-basic"
            label="Title"
            variant="outlined"
          />
          <TextField
            {...contentField}
            fullWidth
            id="filled-basic"
            label="Status"
            variant="outlined"
          />
          <TextField
            {...assignField}
            fullWidth
            id="filled-basic"
            label="Filled"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
            <Select
              {...statusField}
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
            <Button variant="contained" onClick={handlerClick}>
              Отправить
            </Button>
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

const mapStateToProps = (state) => ({
  title: selectors.getTaskTitle(state),
  content: selectors.getTaskContent(state),
  assign: selectors.getTaskAssign(state),
  status: selectors.getTaskStatus(state),
});

export default connect(mapStateToProps, { ...actions })(NewTaskForm);
