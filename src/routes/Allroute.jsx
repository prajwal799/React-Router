import { Route, Switch } from "react-router";


import { Link } from "react-router-dom";
import Card from "../card/card.jsx";
import Show from "../card/show.jsx";
import ShowMoreData from "../card/ShowMoreData.jsx";

function AllRoute(){
    return (
        <div>
           <Switch>
            <Route  exact path="/card" >
                <Card />
            </Route>
            <Route exact path="/showitem">
                <Show />
            </Route>
            <Route exact path="/card/:id">
            <ShowMoreData  />
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
                <Link to="/card">Go Back</Link>
            </Route>
          </Switch>
            

        </div>
    )
}
export default AllRoute