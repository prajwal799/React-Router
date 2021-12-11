import { createContext, useContext } from "react"
import { Authcontext } from "../context/AuthContextApi"
import {Redirect} from "react-router-dom";
import "./module.css"

function Login(){
    const [isLogin,{handleSignIn}] = useContext(Authcontext);
   
      if(isLogin){
          return (
              <Redirect to="/dashboard"></Redirect>
          )
      }
    return (
        <div> <h3>Login</h3>
            <button onClick={handleSignIn} className="signin_btn">Sign in</button>
        </div>
    )
}
export default Login