import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.scss';
import users from '../../../config/users';

function User() {
  const { userUrl } = useParams();
  const user = users.find((item) => item.url === userUrl);
  const { fullName, info } = user;
  return (
    <div className={styles.userContent}>
      <div>
        <h3>{fullName}</h3>
        <div>{info}</div>
      </div>
    </div>
  );
}

export default User;
