import React,{useContext,useState,useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'
import Task from './Task'
import {GlobalContext} from '../context/GlobalState'
import axios from 'axios'

const TaskList = () => {
    const{addTask,tasks} = useContext(TaskListContext)
    const [getTask, setGetTask] = useState([]); 
    const{tokens} = useContext(GlobalContext);

    const config = {
        headers: { Authorization: `Bearer ${tokens}` }
    };
    useEffect(() => {
        axios.get( 
            'https://candidate.neversitup.com/todo/todos/',
          
            config
          ).then(res => {
            addTask(res.data)
            
          })
      }, []);
    
    
   


    return (
        <div>
        

        {tasks.length >= 1  ? (
           <ul className="list">
                {tasks.map((task) => {
                    if(tasks.length != 0){
                        return <Task task={task} key={task._id} />
                    }else{
                        return <p>No data</p>
                    }
                   
                })}
           </ul>
        ) :(
            <div></div>
        )
        } 
        </div>
    )
}

export default TaskList
