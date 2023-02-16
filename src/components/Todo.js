/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

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
