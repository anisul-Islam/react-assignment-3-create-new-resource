import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = (props) => {
  const [todo, setTodo] = useState({title: '', desc: ''});
  const { title, desc } = todo

  // for handling todo state changes
  const handleChange = (e) => {
    const name = e.target.name
    setTodo((prev) => { return {...prev, [name]: e.target.value} })
  };

  // submit the form and send newTodo in App.js
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: uuidv4()
    };

    props.onNewTodo(newTodo);

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
              value={title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="desc"
              id="desc"
              value={desc}
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

export default NewTodo;
