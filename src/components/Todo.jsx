import React from "react";

const Todo = ({ id, title, description }) => {
  //   console.log(title);
  return (
    <div className="bg-[#2c2c2c]  px-5 py-3 rounded-md">
      <h1 className="text-yellow-500 font-extrabold text-2xl">{title}</h1>
      <p className="text-white font-normal">{description}</p>
    </div>
  );
};

export default Todo;
