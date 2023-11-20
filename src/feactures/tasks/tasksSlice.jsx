//REDUCER

import {createSlice} from '@reduxjs/toolkit'
import { useState } from 'react'
import { act } from 'react-dom/test-utils'


const initialState = [
    {
        id:'1',
        title: 'Task 1',
        description: 'Task 1 Description',
        completed: false
    },
     {  id:'2',
    title: 'Task 2',
    description: 'Task 2 Description',
    completed: false
    }
]

export const taskSlice = createSlice({
    name:'tasks', //nombre de la accion a ejecutar
    initialState:initialState, //accion a ejecutar
    reducers:{

        addTask: (state,action)=>{ //espera dos parametros
            // lo unico que le podemos pasar desde nuestro componente es el action
            state.push(action.payload)
            console.log(state, action.type)
           // [...state, action.payload] esta es la forma tipica pero redux tolkit 
           // no lo permite, ya que simplifica el proceso
           //la formula sigue siendo inmutable
        },

        editTask: (state,action)=>{
            const {id,title,description} = action.payload

            const foundTask = state.find(task => task.id === id)
            if(foundTask){
                foundTask.title = title
                foundTask.description = description
            }
        },


        deleteTask:(state,action)=>{ //aaction, dato que le pasamos
           const taskFound= state.find(task => task.id === action.payload) //true
           if (taskFound){
            state.splice(state.indexOf(taskFound), 1)
           }
        }
       

    },
})


export const  {addTask, deleteTask,editTask} = taskSlice.actions //esto es para exportar las funciones individuales
export default taskSlice.reducer // esto exporta todo el reducer es decir, todo el objeto