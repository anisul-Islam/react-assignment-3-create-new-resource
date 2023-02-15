/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

import { FaTimes } from "react-icons/fa";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props.id;
  const handleClicked = (id) => {
    props.onRemoveTodo(id);
  };


  return (
    <article className="todo">
      <h3 className="todo__title">{title}</h3>
      <p>{desc}</p>
      <button className='crossButton' onClick={() => {
          handleClicked(id)
      }}>
          <FaTimes />
      </button>
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
