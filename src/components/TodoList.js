import React, { Component } from 'react';
import {NewTodoForm} from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      todo: evt.target.value
    })
  }

  render() {
    return(
      <div>
        <NewTodoForm 
          todo={this.state.todo}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoList;