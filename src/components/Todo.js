import React from 'react';
import './Todo.css';
import { ReactComponent as RemoveIcon } from '../icons/trash-alt-solid.svg';
import { ReactComponent as EditIcon } from '../icons/pen-solid.svg';

export const Todo = (props) => {
  return (
    <div className="Todo">
      <p>{props.task}</p>
      <div className="Todo-buttons">
        <button className="Todo-button Todo-editBtn">{<EditIcon />}</button>
        <button className="Todo-button Todo-removeBtn" onClick={props.remove}>{<RemoveIcon />}</button>
      </div>
    </div>
  );
};