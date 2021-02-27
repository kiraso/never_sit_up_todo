import React,{useContext} from 'react'

import '../App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskListContextProvider from '../context/TaskListContext'
import {TaskListContext} from '../context/TaskListContext'
const Todo = () => {
    const{tasks} = useContext(TaskListContext)
    
    return (
      
        <TaskListContextProvider>
            <div className="container">
                 <div className="app-wrapper">
                     <Header/>
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                 </div>
            </div>
        </TaskListContextProvider>
        
    )
}

export default Todo
