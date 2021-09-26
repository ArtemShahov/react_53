/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import selector from './selector';

function Examples(props) {
  const { count, setCount } = props;
  return (
    <div>
      <button type="button" onClick={() => setCount(1)}>
        {count}
      </button>
      <button type="button" onClick={() => setCount(-1)}>
        {count}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: selector.getCount(state),
});

export default connect(mapStateToProps, { ...actions })(Examples);
