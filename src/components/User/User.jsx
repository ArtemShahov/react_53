import React from 'react';
import { useParams } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';
import users from '../../config/users';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function User() {
  const { userUrl } = useParams();
  const user = users.find((item) => item.url === userUrl);
  const { fullName, info } = user;
  return (
    <div className={classes.userContent}>
      <div>
        <h3>{fullName}</h3>
        <div>{info}</div>
      </div>
    </div>
  );
}

export default User;
