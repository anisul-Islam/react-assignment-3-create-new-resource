import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
const NewTodo = ({ addNewTodo }) => {
  const [todo, setTodo] = useState({ title: '', desc: '', id: uuidv4() });

  const titleChangeHandler = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const descChangeHandler = (e) => {
    setTodo({ ...todo, desc: e.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todo.title,
      desc: todo.desc
    };
    addNewTodo(newTodo);
    setTodo({ title: '', desc: '' });
  };
  return (
    <div>
      <h1 className="title">Collect Data from a Form</h1>
      <div className="card">
        <form onSubmit={formHandler}>
          <div className="field-group">
            <label className="title">Title:</label>
            <input
              onChange={titleChangeHandler}
              type="text"
              value={todo.title}
              name={todo.title}
              required
            />
          </div>
          <div className="field-group">
            <label>Description:</label>
            <textarea
              onChange={descChangeHandler}
              value={todo.desc}
              type="text"
              name={todo.desc}
              required
            />
          </div>
          <input className="btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

NewTodo.propTypes = {
  onHandleAddTodo: PropTypes.func
};

export default NewTodo;
