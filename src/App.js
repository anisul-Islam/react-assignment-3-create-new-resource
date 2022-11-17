import React, { useState } from 'react';
import './components/App.css';
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
function App() {
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
    },
    {
      id: uuidv4(),
      title: 'do react assignment',
      desc: 'react assignments might be boring but I can do it'
    }
  ];
  const [todos, setTodos] = useState(todosData);

  const addNewTodo = (addNew) => {
    setTodos((pre) => {
      return [...pre, addNew];
    });
  };
  return (
    <div className="App">
      <NewTodo addNewTodo={addNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
