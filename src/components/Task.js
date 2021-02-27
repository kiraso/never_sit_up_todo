import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'
import {GlobalContext} from '../context/GlobalState'
import axios from 'axios'

const Task = ({task}) => {
    const  {removeTask,addTask} = useContext(TaskListContext)
    const {tokens} = useContext(GlobalContext);
    const removeAPITask = () => {
      
        console.log(tokens)
        
          
        const config = {
            headers: { Authorization: `Bearer ${tokens}` }
        };
        
        
        axios.delete( 
          `https://candidate.neversitup.com/todo/todos/${task._id}`,
          config
        ).then(res => {
           
            addTask(res.data)
            removeTask(task._id)
          console.log(res)
        })
        
    }

    const editAPITask = () => {
      
        console.log(tokens)
        
          
        const config = {
            headers: { Authorization: `Bearer ${tokens[0]}` }
        };
        const bodyParameters = task
        
        axios.put( 
          `https://candidate.neversitup.com/todo/todos/${task._id}`,
          bodyParameters,
          config
        ).then(res => {
            alert(bodyParameters)
            console.log(res)
           
            // removeTask(task._id)
         
        })
        
    }


    return (

        
      <li className="list-item">
          <p>{task.title}</p>
          <div> {task.description} </div>
          
          <div>
              <button onClick={() => removeAPITask()} className='btn-delete task-btn'>
                  <i className="fas fa-trash-alt"></i>
              </button>
              <button onClick={() => editAPITask()} className='btn-edit task-btn'>
                  <i className="fas fa-pen"></i>
              </button>
          </div>
      </li>
    )
}

export default Task
