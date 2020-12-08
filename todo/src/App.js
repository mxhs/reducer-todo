import './App.css';
import React, {useReducer} from 'react'
import toDoReducer, {initialState} from './reducers/index'

import {ToDoList} from './components/ToDoList'
import ToDoForm from './components/ToDoForm'



function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState)
  console.log("state", state)

  const handleChanges = () => {
    
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="toDoSection">
        <ToDoList state={state}/>
        <ToDoForm state={state} />
      </div>
    </div>
  );
}

export default App;
