import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: ''
    
    }
  }  
  handleInputchange = event => {
    console.log(event.target.value);
    this.setState({todoList: event.target.value});
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input type="text" placeholder="todo list" onChange={this.handleInputchange} />
        <button>Add todo list</button>
        <button>clear</button>
      </div>
    );
  }
}

export default App;
