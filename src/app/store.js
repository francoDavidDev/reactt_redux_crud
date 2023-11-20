
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer  from '../feactures/tasks/tasksSlice'

export const store = configureStore({
  reducer:{
    tasks: tasksReducer ,
  }
})

