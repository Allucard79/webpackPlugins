import React from 'react';
import style from './Title.css'

const Title = props =>
    <div className={style.Title}>
      <h1>{props.title}</h1>
      <p>Lista: {props.length}</p>
    </div>

export default Title;