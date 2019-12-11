import React, { Component } from "react";
import "./index.css";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo, clearCompletedTodos, deleteToDos } from "./actions";
  
class App extends Component { 
  state =  {
    
    value: ""
  }
  // event handlers -inside we are using this.setState
  handleDelete = (event, id) => {
    // implement me!
    // identify what we want to change in state
    // overwrite the old state with new state
    // const newToDolist = this.state.todos.filter(todo = > todo.id !== id);
    // this.setState({ todos: newToDolist });
    // console.log("hi"); 
    this.props.deleteTodos(this.state.todos.id)
  };

  handleCreate = event => {
    if (event.key === "Enter") {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };
  // overwrite the old state with new state

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  clearClick = event => {
    const newToDolist = this.state.todos.filter(
      todo => todo.comepleted === false
    );
    this.setState({ todos: newToDolist });
  };

  // clearCompleted
  // use filter array

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus
            onKeyDown={this.handleCreate}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              handleDelete={this.handleDelete}
              todos={this.props.todos}
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              handleDelete={this.handleDelete}
              todos={this.props.todos.filter(todo => todo.completed === false)}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              handleDelete={this.handleDelete}
              todos={this.props.todos.filter(todo => todo.completed === true)}
            />
          )}
        />
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>
              {this.props.todos.filter(todo => todo.completed === false).length}
            </strong>{" "}
            item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button
            className="clear-completed" onClick = {this.props.clearCompletedTodos}
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
    
  };
  

  // add "addTodo as a prop to the component"
  // when we call "this.props.addTodo", it will sure to make call store.dispatch(addTodo)
};

 
const mapDispatchToProps = { 
  addTodo,
  clearCompletedTodos,
  deleteToDos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
