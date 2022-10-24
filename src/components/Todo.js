import React from 'react'

const Todo = (props) => {
   
    
  return (
    <article>
        <h3>{props.todo.name}</h3>
        <h4>{props.todo.job}</h4>
        <p>{props.todo.id}</p>
    </article>
        

  )
}

export default Todo