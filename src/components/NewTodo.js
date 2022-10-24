import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState();

  // for handling todo state changes
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTodo({
        ...todo,
        id: uuidv4(),
        title: e.target.value
      });
    }
    if (e.target.name === 'desc') {
      setTodo({
        id: uuidv4(),
        ...todo,
        desc: e.target.value
      });
    }
  };

  // submit the form and send newTodo in App.js
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(todo);

    // for reset todo state
    setTodo({
      title: '',
      desc: ''
    });
  };

  return (
    <div>
      <h1 className="title">Collect Data from a Form</h1>
      <div className="card">
        <form action="" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={todo?.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="desc"
              id="desc"
              value={todo?.desc}
              onChange={handleChange}
              required></textarea>
          </div>
          <div className="field-group">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewTodo.propTypes = {
  onHandleAddTodo: PropTypes.func
};
NewTodo.propTypes = {
  handleAddTodo: PropTypes.func
};
export default NewTodo;
