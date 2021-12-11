import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages2/Dashboard"
import Login from "../pages2/Login"
import Setting from "../pages2/Setting"
import Home from "../pages2/Home"
import PrivateRoute from "./PrivateRoute"

function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <PrivateRoute exact path="/dashboard">
                    <Dashboard/>
                </PrivateRoute>
                <PrivateRoute exact path="/setting">
                    <Setting />
                </PrivateRoute>
            </Switch>

        </div>
    )
}
export default Routes