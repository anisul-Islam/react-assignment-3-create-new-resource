import React from "react";
import Todo from "./Todo";

const Todos = ({ data }) => {
  //   console.log(data);
  return (
    <div className="grid md:grid-cols-4 gap-3">
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default Todos;
