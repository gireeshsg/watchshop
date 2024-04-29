import { useContext, useState } from "react"
import "./reg.css"
import { useNavigate,Link } from "react-router-dom"
import { mycontext } from "./context"
function Register(){
    const {user,setUser} =useContext(mycontext)
    const nav=useNavigate();
    
    const [username,setusername] = useState('')
    const[email,setemail] = useState ('')

    const[password,setpassword] = useState ('')
    const[confirmpassword,setconfirmpassword] = useState ('')
    console.log("user",user);
    
    


    function handbtn() {
        const logUser = {username,email,password,confirmpassword}
        console.log("logUser",logUser);
        setUser([...user,logUser])
    nav("/shop")
        
    }
        
    
return (
    <div className="reg">


<h1>Register</h1>
<input type="text" placeholder="username" className="ee" value={username}  onChange={((e) => setusername(e.target.value))}/>

<input type="email" placeholder="email" className="ff"value={email}  onChange={((e) => setemail(e.target.value))} /> <br /> <br />
<input type="password" placeholder="password" className="gg"value={password}  onChange={((e) => setpassword(e.target.value))} /><br /><br />
<input type="password"placeholder="confirm password" className="nn" value={confirmpassword}  onChange={((e) => setconfirmpassword(e.target.value))}/><br /><br />
<button className="vishnu" onClick={handbtn}>Register</button>


    </div>
)

}
export default Register