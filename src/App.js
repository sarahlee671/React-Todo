import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: '',
      list: []
    
    };
  }  
  handleInputchange = event => {
    console.log(event.target.value);
    this.setState({todo: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      list: [...this.state.list, this.state.todo]
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input value={this.state.todo} onChange={this.handleInputchange} />
        {/* <input type="text" placeholder="todo list" onChange={this.handleInputchange} /> */}
        <button>Add todo list</button>
        <button>clear</button>
      </div>
    );
  }
}

export default App;
