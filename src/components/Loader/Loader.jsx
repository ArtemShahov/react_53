import React from 'react';
import style from './styles.scss';
import svg from '../../assets/loading-process.svg';

function Loader() {
  return (
    <div className={style.loaderWrapper}>
      <img src={svg} alt="Loader" className={style.loader} />
    </div>
  );
}

export default Loader;
