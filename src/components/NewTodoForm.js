import React from 'react';
import './NewTodoForm.css';

export const NewTodoForm = (props) => {
  return(
    <form className="NewTodoForm" onSubmit={props.onSubmit}>
      <label htmlFor="todo">New Todo</label>
      <div>
        <input type="text" id="todo" value={props.todo} placeholder="New Todo" onChange={props.onChange} />
        <button>add todo</button>
      </div>
    </form> 
  );   
};