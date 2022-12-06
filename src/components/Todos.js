import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const Todos = (props) => {
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
