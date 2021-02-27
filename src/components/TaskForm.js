import React,{useContext,useState} from 'react'
import {TaskListContext} from '../context/TaskListContext'
import axios from 'axios'
import {GlobalContext} from '../context/GlobalState'

const TaskForm = () => {
  const {addTask,Task}  =  useContext(TaskListContext);
  const {clearList}  =  useContext(TaskListContext);
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const{tokens} = useContext(GlobalContext);

    const TitlehandleChange = e => {
        setTitle(e.target.value)
        
     
    }
    const DeshandleChange = e => {
        
        setDescription(e.target.value)
     
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(tokens)
        
          
        const config = {
            headers: { Authorization: `Bearer ${tokens}` }
        };
        
        const bodyParameters ={
            "title": title,
            "description": description
            }
            
        
        axios.post( 
          'https://candidate.neversitup.com/todo/todos/',
          bodyParameters,
          config
        ).then(res => {
           
            addTask(res.data)
          console.log(res)
        })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input
                    onChange={TitlehandleChange}
                    value={title}
                    type="text"
                    className="task-input"
                    placeholder="Add Task..."
                    required
                />
                  <input
                    onChange={DeshandleChange}
                    value={description}
                    type="text"
                    className="task-input"
                    placeholder="Add Descripton..."
                    required
                />
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">
                        Add Task
                    </button>
                    {/* <button className="btn clear-btn" onClick={clearList}>
                        Clear
                    </button> */}
                </div>
            </form>
        </div>
    )
}

export default TaskForm
