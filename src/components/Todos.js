import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
