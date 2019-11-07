import React, { Component } from "react";
 
class TodoItem extends Component {
    // this.props.
    render() {
      return(
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange={this.props.handleToggle}
            />
            <label>{this.props.title}</label>
            <button onClick={this.props.handleDelete}className="destroy"  />
          </div>
        </li>
    
      );
    };
  }
  export default TodoItem