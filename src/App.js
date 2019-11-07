import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: todosList,
    value: ""
  };
  // event handlers -inside we are using this.setState
  handleDelete = (event, id) => {
    // implement me!
    // identify what we want to change in state
    // overwrite the old state with new state
    const newToDolist = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newToDolist });
    console.log("hi");
  };

  handleCreate = event => {
    // implement me! indenifiy what we want to  change

    if (event.key === "Enter") {
      const newToDolist = this.state.todos.slice();
      newToDolist.push({
        userId: 1,
        id: Math.floor(Math.random() * 10000),
        title: this.state.value,
        completed: false
      });
      this.setState({ todos: newToDolist, value: "" });
    }
    // overwrite the old state with new state
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleToggle = (event, todoIdToToggle) => {

    const newToDoList = this.state.todos.map(todo => {
      if(todo.id === todoIdToToggle) {
        const newTodo = {...todo};
        console.log(newTodo)
        newTodo.completed = !newTodo.completed;
        console.log(newTodo)
        return newTodo;
      }
      return todo;
    });
    console.log(newToDoList)
    this.setState({ todos: newToDoList });
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
              handleToggle={this.handleToggle}
              handleDelete={this.handleDelete}
              todos={this.state.todos}
            />
          )}
        />
        <Route
          path="/active"
          render={() => (
            <TodoList
              handleToggle={this.handleToggle}
              handleDelete={this.handleDelete}
              todos={this.state.todos.filter(todo => todo.completed === false)}
            />
          )}
        />
        <Route
          path="/completed"
          render={() => (
            <TodoList
              handleToggle={this.handleToggle}
              handleDelete={this.handleDelete}
              todos={this.state.todos.filter(todo => todo.completed === true)}
            />
          )}
        />
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>
              {this.state.todos.filter(todo => (todo.completed = false)).length}
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
            className="clear-completed"
            onClick={event => this.clearClick(event)}
          >
            Clear completed
          </button>
        </footer>
      </section>
        );
    
  }
}

export default App;
