import logo from './logo.svg';
import './App.css';
import ToDoListDaily from './components/ToDoListDaily';
import ToDoWeekly from './components/ToDoWeekly';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

//<ToDoWeekly/>

function App() {

  const [logUser, setLogUser] = useState({});

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login setLogUser={setLogUser}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      
      <Route path='/dashboard' element={<ToDoWeekly logUser={logUser}/>}></Route>

      
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
