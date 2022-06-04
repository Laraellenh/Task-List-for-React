
import React, {useState, useEffect} from 'react'
import css from './Task.css';

function Task({task, setTasks}) {
// set task state
    const [done, setDone] = useState(false)
    
       function changeStateDone(task){
        setDone((done)=> !done);
       }
       const [newTask, setNewTask] = useState ("")


    //    update the  done attribute in the task db.json
   
  return (
    <div className='frame'> 
    
        <ol className="card"> {task.task}</ol>
        <button className="button" onClick={changeStateDone} > {done? "Completed Task, great work" : "To Do"} </button>

    </div>
  )
}

export default Task