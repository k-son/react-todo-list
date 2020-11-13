import React from 'react';

export const NewTodoForm = (props) => {
  return(
    <form className="NewTodoForm" onSubmit={props.onSubmit}>
      <label htmlFor="todo" />
      <input type="text" id="todo" value={props.todo} placeholder="New Todo" onChange={props.onChange} />
      <button>add todo</button>
    </form> 
  );   
};