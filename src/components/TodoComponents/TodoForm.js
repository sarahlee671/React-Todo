import React from "react";

const TodoForm = props => (

        <form onSubmit={props.onSubmit}>
          <input placeholder="Add todo" value={props.todo} onChange={props.onChange} />
          <button>Add todo list</button>
          <button>Clear Completed</button>
        </form>

)



export default TodoForm;
