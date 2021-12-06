import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar"> 
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
    )
}
export default Navbar;