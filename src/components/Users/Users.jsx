import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import styles from './style.js';
import users from '../../config/users';
import User from '../User/User';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Users() {
  const { url } = useRouteMatch();
  return (
    <div className={classes.usersWrap}>
      <div>
        {users.map((item) => (
          <li key={item.fullName}>
            <Link to={`${url}/${item.url}`}>{`${item.fullName}`}</Link>
          </li>
        ))}
      </div>
      <Route path={`${url}/:userUrl`} component={User} />
    </div>
  );
}

export default Users;
