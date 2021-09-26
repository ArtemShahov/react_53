import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Switch, Route } from 'react-router-dom';
import styles from './style.js';
import routes from '../../config/route';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Main() {
  return (
    <main className={classes.main}>
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
