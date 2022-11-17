import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <h3 className="todo__title">{todo.title}</h3>
      <p>{todo.desc}</p>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string
  })
};

export default Todo;
