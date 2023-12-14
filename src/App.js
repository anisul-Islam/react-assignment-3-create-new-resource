import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

const todosData = [
  {
    id: uuidv4(),
    title: 'read react documentation',
    desc: 'react documentation might be boring but I can do it'
  },
  {
    id: uuidv4(),
    title: 'do react assignment',
    desc: 'react assignments might be boring but I can do it'
  }
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  // get the newTodo from NewTodo.js here inside this function
  const handleAddTodo = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='container'>
      <NewTodo addTodo={handleAddTodo}/>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
