import { useContext, useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import { mycontext } from "./context"
// import "./login.css"
function Login() {
    const {user,setuser} =useContext(mycontext)
    console.log("user from login",user);

    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    console.log("email",email)
    console.log("password",password);
    const nav=useNavigate()
    function handlebtn() {
        const loginEmail = user.find((userdata)=>userdata.email === email)
        const loginPassword = user.find((userdata)=>userdata.password === password)
        if(loginEmail && loginPassword)
       nav("/") 
    }
    return (
        <div>
            <h1>login</h1>
            <input type="text"placeholder="email"value={email}  onChange={((e) => setemail(e.target.value))} /><br /> <br />
            <input type="text" placeholder="password"value={password}  onChange={((e) => setpassword(e.target.value))}/><br /><br />
            
            
        
        <button onClick={handlebtn}> login</button>
        </div>

    )

}
export default Login