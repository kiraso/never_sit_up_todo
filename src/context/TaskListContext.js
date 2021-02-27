import React,{createContext,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
   const [tasks,setTasks] = useState([])

    const [tokens,setToken] = useState([])

    const addTask = (title) =>{
        console.log(tasks)
        // setTasks([])
        // if(tasks.length == 0 ){
        //     setTasks([title])
        // }else{
            setTasks([...tasks,title])
        // }
      
    }

    const removeTask = id =>{
        setTasks(tasks.filter(task => task._id !== id))
    }

    const clearList = () =>{
        setTasks([])
    }
    const addToken = (tk) =>{
        setToken({token: tk})
        console.log(tokens)
        console.log()
    }

    return (
        <TaskListContext.Provider value={{tasks,addTask,removeTask,clearList,addToken,tokens}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider