import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';
import route from '../../../config/route';
// import Button from '../Button/Button.jsx';

function Side() {
  return (
    <aside className={styles.side}>
      <nav>
        <ul className={styles.list}>
          {route.map((item) => {
            return (
              <li key={item.title} className={styles.listItem}>
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
