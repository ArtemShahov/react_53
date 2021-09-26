/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import selector from './selector';
import styles from './styles.scss';

function Examples(props) {
  const { count, setCount } = props;
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.btn} onClick={() => setCount(-1)}>
        {count}
      </button>
      <button type="button" className={styles.btn} onClick={() => setCount(1)}>
        {count}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: selector.getCount(state),
});

export default connect(mapStateToProps, { ...actions })(Examples);
