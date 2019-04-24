// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const TodoList = props => (
    <ul>
        {
            props.tasks.map((task, index) => <Todo key={index} task={task} />)
        }
    </ul>
);

export default TodoList;