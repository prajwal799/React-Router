import { Route } from "react-router";
import Home from "../page/Home.jsx";
import About from "../page/Aboutpage.jsx";
import Login from "../page/Login";
import Contact from "../page/Contact";
import Service from "../page/Servicepage";

function AllRoute(){
    return (
        <div>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/service">
                <Service/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>

        </div>
    )
}
export default AllRoute