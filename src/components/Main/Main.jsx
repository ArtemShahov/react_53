import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './style.scss';
import routes from '../../config/route';

function Main() {
  return (
    <main className={styles.main}>
      <Switch>
        {routes.map((item) => (
          <Route key={item.url} exact={!!item.exact} path={`/${item.url}`}>
            {item.component}
          </Route>
        ))}
      </Switch>
    </main>
  );

  // return (
  //   <main className={classes.main}>
  //     <Switch>
  //       <Route exact path="/">
  //         <KanbanBoard />
  //       </Route>
  //       <Route path="/about">
  //         <About text="About" />
  //       </Route>
  //       <Route path="/users">
  //         <Users />
  //       </Route>
  //     </Switch>
  //   </main>
  // );
}

export default Main;
