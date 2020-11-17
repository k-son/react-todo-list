import React, {Component} from 'react';
import './Todo.css';
import { ReactComponent as RemoveIcon } from '../icons/trash-alt-solid.svg';
import { ReactComponent as EditIcon } from '../icons/pen-solid.svg';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      isEdited: false,
      task: this.props.task
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleClick() {
    this.setState({
      completed: !this.state.completed 
    });
  }

  toggleEdit() {
    this.setState({
      isEdited: !this.state.isEdited 
    });
  }

  handleEdit(evt) {
    this.setState({
      task: evt.target.value
    })
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({
      isEdited: !this.state.isEdited
    });
    evt.stopPropagation();
  }

  render() {
    let result;
    if (this.state.isEdited) {
      result = (
        <form className="Todo-form" onSubmit={this.handleUpdate}>
          <input type="text" value={this.state.task} onChange={this.handleEdit}></input>
          <button>update</button>
        </form>);
    } else {
      result = (
        <div className="Todo">
          <div className="Todo-text" onClick={this.handleClick}>
            <p className={this.state.completed && 'Todo-completed'}>{this.props.task}</p>
          </div>
          <div className="Todo-buttons">
            <button className="Todo-button Todo-editBtn" onClick={this.toggleEdit}>{<EditIcon />}</button>
            <button className="Todo-button Todo-removeBtn" onClick={this.props.remove}>{<RemoveIcon />}</button>
          </div>
        </div>);
    }
    return (
      <li>
        {result}
      </li>
    );
  } 
}

export default Todo;