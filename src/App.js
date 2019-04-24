import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      tasks: []
    
    };
  }  
 
 

  onChange = event => {

    this.setState({todo: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todo: '',
      tasks: [...this.state.tasks, this.state.todo]
    });
  }
  
  render() {
    return (
      <div className="App">
        <TodoForm onSubmit={this.onSubmit} onChange={this.onChange}/>

        {/* <form className="App" onSubmit={this.onSubmit}>
          <input placeholder="Add todo" value={this.state.todo} onChange={this.onChange} />
          <button>Add todo list</button>
          <button>Clear Completed</button>
        </form> */}
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
