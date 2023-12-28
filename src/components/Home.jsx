import React, { useState } from "react";
import Todos from "./Todos";
import data from "../../public/data.json";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState(data);
  console.log(todos);

  const storeTodos = (todo) => {
    setTodos((previousTodos) => [...previousTodos, todo]);
  };
  return (
    <div className="text-white mx-8">
      <NewTodo storeTodos={storeTodos} />
      <Todos data={todos} />
    </div>
  );
};

export default Home;
