import React from 'react'
import '../App.css'
import Todo from './Todo'
import TaskForm from './TaskForm'
import Header from './Header'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskListContextProvider from '../context/TaskListContext'
import GlobalContext from '../context/GlobalState'

const App = () => {
    return (
        <GlobalContext>
        <TaskListContextProvider>
        <Router>
        <Switch>
          {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
          <Route exact path="/" component={Login} />
          <Route path="/add" component={Todo} />
          <Route path="/edit" component={Todo} />
        </Switch>
      </Router>
      </TaskListContextProvider>
    </GlobalContext>
        // <TaskListContextProvider>
        //     <div className="container">
        //          <div className="app-wrapper">
        //              <Header/>
        //             <div className="main">
        //                 <TaskForm />
        //                 <TaskList />
        //             </div>
        //          </div>
        //     </div>
        // </TaskListContextProvider>
    )
}

export default App
