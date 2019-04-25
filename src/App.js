import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo.css';


const tasks = [
  {
    todo: "laundry",
    id: 123,
    completed: false
  },
  {
    todo: "Make dinner",
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      // todo: "",
      completed: false
    };
  }  

  toggleItem = id => {
    const newList = this.state.tasks.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });

    this.setState({tasks: newList});
  };

  addTodo = item => {
    const copiedTasks= this.state.tasks.slice();
    const newItem = {
      todo: item,
      id: Date.now(),
      completed: false

    }
    copiedTasks.push(newItem);

    this.setState({tasks: copiedTasks});
  };

  clearCompleted = () => {
    const todoCompleted = this.state.tasks.filter(item => {
      return item.completed === false 

    });
    this.setState({tasks: todoCompleted})
  };
   
  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem}/>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
