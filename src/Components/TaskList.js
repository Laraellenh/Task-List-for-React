import React, {useEffect, useState} from 'react'
import Task from './Task'
import css from './Task.css'
import NewTask from './NewTask'



export default function TaskList(){
    // fetch tasks and make an array of them
    const [tasks, setTasks] = useState([])
   
    // get initial task data, set in state
    useEffect(()=>{
        fetch('http://localhost:3000/tasks')
          .then(r=>r.json())
          .then(setTasks)
        },[])
        // make array, and then list the items in new component
        const taskArray= tasks?.map((task)=> <Task setTasks={setTasks} task={task} key={task.id}/>)
        // add new tasks to the db (persist)
      
    return(
        <>
        
        <NewTask tasks={tasks} setTasks={setTasks} /> 
        <br></br>
        <div>  Tasks To Prepare for Front End Role {taskArray}
        
        </div>
        </> 
    )

}