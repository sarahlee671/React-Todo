import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    todo: '',
    id: 123,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  }  

  toggleItem = (id) => {
    console.log(id);


  }
 
 

  onChange = event => {
    event.preventDefault();

    this.setState({todo: event.target.value});
  }

  onClick = (event) => {
    event.preventDefault();
   
    this.setState({
      
      tasks: [...this.state.tasks, this.state.todo],
      todo: ""
  
    });
  };


  
  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoForm todo={this.state.todo} onChange={this.onChange} onClick={this.onClick}/>
        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
