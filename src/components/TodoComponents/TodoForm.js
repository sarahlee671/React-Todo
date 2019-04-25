import React from "react";
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           inputValue: '', 
        };
    }

    handleChanges = e => {
        this.setState({inputValue: e.target.value});
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.setState({ inputValue: ""});
    };

    render() {
        return (
            < form className="form" onSubmit={this.submitTodo} >
                <input className="input" type="text" todo="item" value={this.state.inputValue} onChange={this.handleChanges} />
                <button className="add-button">Add</button>
            </form >

        );

    }

}

 export default TodoForm;
