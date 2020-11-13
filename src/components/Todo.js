import React from 'react';

export const Todo = (props) => {
  return (
    <div className="Todo">
      <p>{props.task}</p>
      <button onClick={props.remove}>x</button>
    </div>
  );
};