import React from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"> Movie App </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Movies</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        
        
      </ul>
      
    </div>
        </nav>
    );
}
export default Navbar;