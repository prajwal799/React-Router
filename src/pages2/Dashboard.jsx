import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Authcontext } from "../context/AuthContextApi";
import  "./module.css"

function Dashboard(){
    const [isLogin,{handleSignOut}] = useContext(Authcontext);
     
    if(!isLogin){
           return(
               <Redirect to="/login"/>
           )
       }
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
        <button onClick={handleSignOut} className="signout_btn">Sign out</button>
        </div>
    )
}
export default Dashboard;