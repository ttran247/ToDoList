import React, { Component } from "react";
import TodoItem from  './TodoItem'
import { connect } from "react-redux";
import {toggleTodo } from "./actions";

class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(todo => (
              <TodoItem  
              key={todo.id}
              // handleToggle={event=>this.props.toggleTodo(event,todo.id)}
              handleDelete={event=> this.props.handleDelete(todo.id)} 
              handleToggle ={event => this.props.toggleTodo(todo.id)}
              id = {todo.id}
              title={todo.title} 
              completed={todo.completed} />
            ))} 
          </ul> 
        </section> 
      );
    };
    }

    const mapDispatchToprops = {
      toggleTodo
    }
    export default connect(null, mapDispatchToprops)(TodoList);