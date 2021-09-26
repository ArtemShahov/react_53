import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Link } from 'react-router-dom';
import styles from './style.js';
import route from '../../config/route';
// import Button from '../Button/Button.jsx';

jss.setup(preset());
const { classes } = jss.createStyleSheet(styles).attach();

function Side() {
  return (
    <aside className={classes.side}>
      <nav>
        <ul>
          {route.map((item) => {
            return (
              <li key={item.title}>
                <Link to={`/${item.url}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Side;
