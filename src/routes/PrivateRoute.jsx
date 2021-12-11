import { Children, useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { Authcontext } from "../context/AuthContextApi"

function PrivateRoute({exact,path,children}){
    const [isLogin] = useContext(Authcontext);
    if(!isLogin){
        return(
            <Redirect to="/login"/>
        )
    }
    return(
   <Route exact={exact} path={path}>
       {children}
   </Route>
    )
}
export default PrivateRoute