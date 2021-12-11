import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Authcontext } from "../context/AuthContextApi";

function Setting(){
    const [isLogin] = useContext(Authcontext);
    if(!isLogin){
        return (
            <Redirect  to="/login"/>
        )
    }
    return(
        <div>Settings</div>
    )
}
export default Setting;