# Assessment: Todos Part 1

For this assessment, you'll be extending a todo application such that users can actually interact with it.

Here's what the final product should look like:  
![example output](screenshots/result.gif)

In doing so, you'll be demonstrating a basic understanding of the following:

- modifying component-specific values using state
- responding to user interactions by using event handlers and component methods

Event handlers can be written in a variety of ways.

What is most important to understand about them is how to bind them properly to the component instance.
You may see a few different ways.

```jsx
// ES5 style

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { on: false };
  }

  handleToggle(event) {
    this.setState(state => ({
      on: !state.on;
    }));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Toggle is {this.state.on ? "on" : "off"}</h1>
        <button onClick={this.handleToggle}>Click Me</button>
      </React.Fragment>
    );
  }
}
```

```jsx
// ES6 style

class MyComponent extends Component {
  state = {
    on: false
  }

  handleToggle = event => {
    this.setState(state => ({
      on: !state.on;
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h1>Toggle is {this.state.on ? "on" : "off"}</h1>
        <button onClick={this.handleToggle}>Click Me</button>
      </React.Fragment>
    );
  }
}
```

The ES6 style is preferred. Proper binding, using one of the patterns above, is required when the handler must refer to any properties or methods on the component instance. It is very common that you will need `this.setState` method inside an event handler.

The complexity of event handlers can increase when working with lists of components where each component needs its own "parameterized" version of the event handler.

Consider the example below.

```jsx
class MyComponent extends Component {
  state = {
    accounts: [{ id: 2938 }, { id: 3874 }, { id: 6984 }]
  };

  handleDelete = accountId => event => {
    const newAccounts = this.state.accounts.filter(
      account => account.id === accountId
    );
    this.setState({ accounts: newAccounts });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Active Accounts</h1>
        {this.state.accounts.map(account => (
          <div>
            <p>Account: {account.id}</p>
            <button onClick={this.handleDelete(account.id)}>Delete Me</button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
```

Two things to notice: `handleDelete` method is actually a function inside of a function using two fat arrows. A single `handleDelete` method is used for every account, but the first function is called with the `account.id`. This creates a closure, aka a new memory context, in which `accountId` is saved with the return value which is the inner function.

Fork then clone this repository: https://gitlab.com/kenzie-academy/se/fe/react/assessment---todo-app-part-1

## Acceptance Criteria

### User Can Add a Todo:

When a user types into the top input and hits the Enter/return key, it should add it as a todo and empty the input.

### User can mark a todo as complete:

When a user clicks on the circle at the beginning of a todo it will toggle whether that todo is completed or not.

### User Can Delete a Todo:

When a user clicks the "X" on the right of a Todo, it removes it from the list.

### User Can Delete all Todos Marked as Complete:

When a user clicks the button 'Clear Completed' it will delete all todos that are marked as complete.

## Submission

You **will** be required to submit a deployed application. If you instead
submit a link to a repository (that is, only code), you _will_ be awarded
**0** points.
