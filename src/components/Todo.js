import React, {Component} from 'react';
import './Todo.css';
import { ReactComponent as RemoveIcon } from '../icons/trash-alt-solid.svg';
import { ReactComponent as EditIcon } from '../icons/pen-solid.svg';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduled: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      scheduled: !this.state.scheduled 
    });
  }

  render() {
    return(
      <div className="Todo" onClick={this.handleClick}>
        <p className={!this.state.scheduled && 'Todo-done'}>{this.props.task}</p>
        <div className="Todo-buttons">
          <button className="Todo-button Todo-editBtn">{<EditIcon />}</button>
          <button className="Todo-button Todo-removeBtn" onClick={this.props.remove}>{<RemoveIcon />}</button>
        </div>
      </div>
    );
  } 
}

export default Todo;