import React, { Component } from "react";
import {toggleTodo,deleteToDos} from "./actions";
import {connect} from 'react-redux'



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
            <button className="destroy" onClick={event => this.props.deleteToDos(this.props.id)} />
          </div>
        </li> 
    
    )
  };
}
  
  const mapDispatchToProps = {
    toggleTodo,
    deleteToDos
  };
  export default connect (null,mapDispatchToProps) (TodoItem);