# Assessment: Todos Part 1

Fork then clone this repository: [https://gitlab.com/kenzie-academy/se/fe/react/assessment---todo-app-part-1](https://gitlab.com/kenzie-academy/se/fe/react/assessment---todo-app-part-1)

For this assessment, you'll be extending a todo application such that users can actually interact with it.

Here's what the final product should look like:

<img src="https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/todo-part-1.gif" alt="example output" height="400px" />

In doing so, you'll be demonstrating a basic understanding of the following:

- modifying component-specific values using state
- responding to user interactions by using event handlers and component methods

Event handlers can be written in a variety of ways.

What is most important to understand is how to bind them properly to the component instance.
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

The ES6 style is preferred. Proper binding, using one of the patterns above, is required when the handler must refer to any properties or methods on the component instance. Remember, properties/methods on the instance are accessed using `this` when writing instance methods. It is very common that you will need `this.setState` method inside an event handler method.

The complexity of event handlers can increase when working with lists of components where each component needs its own "parameterized" version of the event handler.

Consider how the `handleDelete` method below works.

```jsx
class MyComponent extends Component {
  state = {
    accounts: [{ id: 2938 }, { id: 3874 }, { id: 6984 }]
  };

  handleDelete = accountId => event => {
    const newAccounts = this.state.accounts.filter(
      account => account.id !== accountId
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
            <button onClick={this.handleDelete(account.id)}>
              Delete Account
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
```

Two things to notice: `handleDelete` method is actually a function inside of a function (using two fat arrows). The first function is called with the `account.id` (you can see the first call in the button `onClick`). This creates a closure in which `accountId` is saved along with the return value, which is the inner function of `handleDelete`. React will hand off this function closure to the DOM. The DOM then calls the inner function, passing in the `event` object when the user clicks one of the buttons. When the inner function runs, its value for `accountId` will contain the correct id for the button that was clicked.

The `handleDelete` example below works the same, however, it is written to take two parameters at once instead of one in the first call and one in the second.

```js
class MyComponent extends Component {
  state = {
    accounts: [{ id: 2938 }, { id: 3874 }, { id: 6984 }]
  };

  handleDelete = (event, accountId) => {
    const newAccounts = this.state.accounts.filter(
      account => account.id !== accountId
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
            <button onClick={event => this.handleDelete(event, account.id)}>
              Delete Account
            </button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
```

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
