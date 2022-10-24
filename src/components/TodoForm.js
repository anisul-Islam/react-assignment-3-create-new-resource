import React,{useState} from 'react'

const TodoForm = (props) => {

    const [user,setUser] = useState({
        name:"",
        job:"",
        id:"",
    })

    const{name,job,id} = user;

    const handleChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onTodo(user);
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className='form-field'>
            <label htmlFor='name'>Name : </label>
            <input type="text" name="name" id="name" onChange={handleChange} value={name} required />
        </div>
        <div className='form-field'>
            <label htmlFor='job' >Job : </label>
            <input type="text" name="job" id='job' onChange={handleChange} value={job} required />
        </div>

        <div className='form-field'>
            <label htmlFor='id' >Id : </label>
            <input type="text"  name="id" id='id' onChange={handleChange} value={id} required />
        </div>

        <button type='submit'>Register</button>
    </form>
  )
}

export default TodoForm