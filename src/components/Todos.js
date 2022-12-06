import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const Todos = (props) => {
  const [arrayTodo]=props.todos
  const {id,title,desc}=arrayTodo
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo key={id} todo ={arrayTodo} />
      ))}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
