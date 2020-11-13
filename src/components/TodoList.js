import React, { Component } from 'react';
import {NewTodoForm} from './NewTodoForm';

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
    const newTask = this.state.todo;
    this.setState({
      tasks: [...this.state.tasks, newTask],
      todo: ''
    });
  }

  render() {
    return(
      <div>
        <div>
          {this.state.tasks.map(task => {
            return <p>{task}</p>;
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