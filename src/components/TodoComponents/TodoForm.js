import React from "react";

const TodoForm = props => (

        <form>
          <input placeholder="Add todo" value={props.todo} onChange={props.onChange} />
          <button onClick={props.onClick}>Add todo</button>
          <button>Clear Completed</button>
        </form>

)



export default TodoForm;
