import React, {useState} from 'react'

function NewTask({tasks, setTasks}) {
 // add new tasks to state
 const [newTask, setNewTask] = useState("")
    function handleSubmit(e){
           
        const formInput = {
            task: newTask
        }
        e.preventDefault()
        
        fetch('http://localhost:3000/tasks', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInput)
        })
        .then(r=>r.json())
        .then(console.log)
        setNewTask("")
        setTasks(...tasks, newTask)
    }

    function handleChange(e){
        setNewTask(e.target.value)
    }
  return (
      <>
    <form onSubmit={handleSubmit}>
    <label> 
    More to do? Jot it down, ya clown </label> 
    <input type = "text"
    placeholder = "enter a new task here"
    value = {newTask}
    onChange ={handleChange}
    />
    <button className='button'
    type= "submit"
    >
    Submit
    </button>
    </form>
    </>
  )
}

export default NewTask