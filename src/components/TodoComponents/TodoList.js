// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = props => (
    <ul>
        {
            props.tasks.map((task, index) => <li key={index}>{task}</li>)
        }
    </ul>
);

export default TodoList;
