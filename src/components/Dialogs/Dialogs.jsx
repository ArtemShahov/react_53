import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import classes from './style';
import users from '../../config/users';
// import Dialog from '../Dialog';

function Dialogs() {
  const { url } = useRouteMatch();
  return (
    <div>
      <div>
        {users.map((item) => (
          <Link key={item.url} to={`${url}/${item.url}`}>
            {item.fullName}
          </Link>
        ))}
      </div>
      {/* <div>
        <Route path={`${url}:userUrl`} component={Dialog} />
      </div> */}
    </div>
  );
}

export default Dialogs;
