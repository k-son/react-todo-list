import React from 'react';

export const Todo = (props) => {
  return (
    <div className="Todo">
      <p>{props.task}</p>
    </div>
  );
};