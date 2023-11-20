import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
//son las funciones que queremos llamar para actualizar el estado 
// useDispach => para hacer algo
//useSelector => es para selecionar o traes algo desde el estado

import { Route,Router,Routes,BrowserRouter } from "react-router-dom";

function App() {


  return (
    <div className="bg-zinc-900 h-screen text-white ">
      <div className='flex items-center justify-center h-full'>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<TaskList/>} />
            <Route path='/create-task' element={ <TaskForm/>} />
            <Route path='/edit-task/:id' element={ <TaskForm/>} />
               
        </Routes>
      </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
