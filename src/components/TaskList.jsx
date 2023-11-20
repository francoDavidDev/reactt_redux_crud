import React from 'react'
import { useSelector } from "react-redux"; //leer un dato
import { useDispatch} from "react-redux"; // llamar a una funcion
import { deleteTask } from '../feactures/tasks/tasksSlice';


import { Link } from "react-router-dom";

const TaskList = () => {

const tasks =  useSelector(state => state.tasks)
 const dispatch =  useDispatch()//para disparar un evento
 console.log(tasks)

 const handleDelete= (id)=>{
 dispatch(deleteTask(id))
 }

  return (
    <div className='w-4/6'>

      <header className=' flex justify-between items-center py-4'>
        <h1>Task {tasks.length }</h1>
        <Link to='/create-task' 
        className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>
          Create Task
        </Link>
        
      </header>

        <div className='grid grid-cols-3 gap-4'>

        {tasks.map((task)=>{
        return(
          <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
              <header className='flex justify-between'>
              <h3> {task.title} </h3>

              <div className='flex gap-x-2'>
                  <Link to={`/edit-task/${task.id}`}
                  className='bg-zinc-600 px-2 py-1 text-xs rounded-md'
                  > Edit</Link>
                  <button  className='bg-red-500 px-2 py-1 text-xs rounded-md' 
                   onClick={()=>handleDelete(task.id)}>Delete</button>
                 
              </div>
        
              </header>
              <p> {task.description} </p>
          </div>
        )
      })}


        </div>
    </div>
  )
}

export default TaskList
