import React, { useReducer, useState } from "react";

import Todos from "./Todos";
import TodoForm from "./TodoForm";

const todosData = [
  {
    name: "Muhammad Ismail",
    id: 105,
    job: "Junior Developer",
  },
  {
    name: "Anisul Islam",
    id: 205,
    job: "Software Engineer",
  },
  {
    name: "Shanto Islam",
    id: 204,
    job: "Developer",
  },
];

const Home = () => {
  const [todos, setTodos] = useState(todosData);

  const handleNewTodo = (newTodo) =>{
    setTodos([...todos,newTodo])
  }

  return (
    <div className="sectionOne">
      <TodoForm onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
