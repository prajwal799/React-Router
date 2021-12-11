import { Link } from "react-router-dom";

function Navbar2(){
    return(
        <div className="navbar2">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/setting">setting</Link>
        </div>
    )
}
export default Navbar2;