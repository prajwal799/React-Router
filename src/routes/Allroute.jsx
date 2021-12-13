import { Route, Switch } from "react-router";
import Home from "../page/Home.jsx";
import About from "../page/Aboutpage.jsx";
import Login from "../page/Login";
import Contact from "../page/Contact";
import Service from "../page/Servicepage";
import Product from "../page/Product.jsx";
import ProductDetalis from "../page/ProductDetalis.jsx";
import { Link } from "react-router-dom";
import Card from "../card/card.jsx";
import Show from "../card/show.jsx";

function AllRoute(){
    return (
        <div>
           <Switch>
            <Route  exact path="/" >
                <Card />
            </Route>
            <Route>
                <Show />
            </Route>
            {/* <Route exact path="/product">
                <Product/>
            </Route>
            <Route exact path="/product/:id">
                <ProductDetalis />
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
            </Route> */}
            <Route  >
                <h1> Create a 404 page, if the route does not exist</h1>
                <Link to="/">Go Back</Link>
            </Route>
          </Switch>
            

        </div>
    )
}
export default AllRoute