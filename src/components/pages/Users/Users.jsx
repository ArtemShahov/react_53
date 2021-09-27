import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import styles from './style.scss';
import users from '../../../config/users';
import User from '../../User';

function Users() {
  const { url } = useRouteMatch();
  return (
    <div className={styles.usersWrap}>
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
