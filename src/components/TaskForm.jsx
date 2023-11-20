import { useState,useEffect } from "react";
import { useSelector } from "react-redux"; //leer un dato
import { useDispatch } from "react-redux"; // llamar a una funcion
import {v4 as uuid} from 'uuid'

import { useNavigate, useParams } from "react-router-dom";

//action´s
import { addTask, deleteTask,editTask} from "../feactures/tasks/tasksSlice";


const TaskForm = () => {
  const params = useParams()
  const navigate = useNavigate()//lo instanciamos
  const tasks = useSelector (state => state.tasks) //ver tareas , acceder

  const [task, setTask] = useState({
      title: '',
      description: ''
  })

  const dispatch = useDispatch()

  const handleChange = e =>{
    //console.log(e.target.name , e.target.value)  
  //muestra por pantalla el name y el valor del input que estoy utilizando.
  setTask({
    ...task,
    [e.target.name]: e.target.value
  })    
  }

  useEffect(()=>{
    if(params.id){
      setTask(tasks.find(task => task.id === params.id));
    }
  },[params.id, task])

  const handleSubmit = (e)=>{
    e.preventDefault()
    //condicion de modificar
      if(params.id){

          dispatch(editTask(task))
      }else {
        dispatch(addTask({
          ...task,
          id:uuid(),
        })) // le pasamos la tarea
       
      }
      navigate('/')
  }

  return (
    <section>
      <form  onSubmit={handleSubmit} className="bg-zinc-800 mx-w-sm p-4 mb-1">
        <label htmlFor="title" className="block text-xs font-bold mb-2 ">Task:</label>
        <input name='title' type='text' placeholder="title" onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />


        <label label htmlFor="description" className="block text-xs font-bold mb-2 " >Descripcion:</label>
        <textarea name="description" placeholder="Description" onChange={handleChange}
        value={task.description} 
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        
        ></textarea>

        <button className="bg-indigo-600 px-2 py-1 rounded-sm" >Save</button>

        </form> 
    </section>
  )
}

export default TaskForm
