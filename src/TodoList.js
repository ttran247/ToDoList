import React, { Component } from "react";
import TodoItem from  './TodoItem'

class TodoList extends Component {
    render() {
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.map(todo => (
              <TodoItem  
              key={todo.id}
              handleToggle={event=>this.props.handleToggle(event,todo.id)}
              handleDelete={event=> this.props.handleDelete(event,todo.id)} 
              title={todo.title} 
              completed={todo.completed} />
            ))}
          </ul>
        </section>
      );
    };
    }
    export default TodoList