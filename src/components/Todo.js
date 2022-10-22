import PropTypes from 'prop-types';
import React from 'react';

const Todo = (props) => {
  const { title, desc } = props.todo;
  return (
    <article className="todo">
      <h3 className="todo__title">{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string
  })
};

export default Todo;
