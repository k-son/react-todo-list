import React, { Component } from 'react';
import { NewTodoForm } from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      tasks: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      todo: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTask = {task: this.state.todo, id: uuidv4()};
    this.setState({
      tasks: [...this.state.tasks, newTask],
      todo: ''
    });
  }

  handleRemove(id) {
    this.setState({
      tasks: this.state.tasks.filter(el => el.id !== id)
    });
  }

  render() {
    return(
      <div className="TodoList">
        <div className="TodoList-intro">
          <h1>Todo List!</h1>
          <h2>A simple react todo list app.</h2>
        </div>        
        <div>
          {this.state.tasks.map(task => {
            return (
              <Todo
                key={task.id}
                id={task.id}
                task={task.task}
                remove={() => this.handleRemove(task.id)} 
              />
            );
          })}
        </div>
        <NewTodoForm 
          todo={this.state.todo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default TodoList;