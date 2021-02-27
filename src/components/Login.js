import React,{useContext,useState} from 'react'
import '../Login.css'
import { useHistory} from "react-router-dom";
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState'



const Login = () => {
    let history = useHistory();
   
    const {addToken, addUser}  =  useContext(GlobalContext);

    const [user,setUser] = useState({username:"Annie",password:"12345678" })
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const handleChangeN = e => {
        e.preventDefault()
        setName(e.target.value)
     
       
    }
    const handleChangeP = e => {
       
        setPassword(e.target.value)
       
    }
   
   


    const handleSubmit = e => {
    
        setUser({username:name,password:password })
        axios.post(`https://candidate.neversitup.com/todo/users/auth/`, user )
            .then(res => {
                if(res.status == 200){
                    // alert('success')
                    alert(res.data.token)
                    addToken(res.data.token)
                
                  
                    history.push("/edit");
                }
        
      }).catch(err =>{
        alert('user or password ')
      })
        
    }
    return (
        <div className="App">
                   
            <div className="input-container">
            <input   onChange={handleChangeN} type="text" placeholder="Username" value={name}/>
            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>
            
            <div className="input-container">
            <input onChange={handleChangeP}  type="password" placeholder="Password" value={password}/>
            <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>
            {/* <Link to="/edit"> */}
                <button className="Button_Login" type="submit" onClick={handleSubmit}>Log In</button>
            {/* </Link> */}
        </div>
        
    )
}

export default Login
