import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css'
import LogOut from "../Logout";

const Navbar = () =>
{
    return(

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" Link="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <a class="navbar-brand" href="#">Coupon World</a>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link " href='/registration'>Register</a>
        </li>
      </ul>
     
    </div>
  </div>
  <div>
    {/* <Link  className="log" to="/logout" >Logout</Link> */}
    {/* <Link to="/logout">Logout</Link> */}
    <a class="log2 " href='/logout'>LogOut</a>
  </div>
</nav>



        </div>
    )
}

export default Navbar;