import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  var auth = JSON.stringify(localStorage.getItem("auth"))
console.log("this is auth string :" + auth);



const nav = useNavigate();
const [input, setInput] = useState({
username: "",
password: "",



});
const inputEvent = (event) => {



const { name, value } = event.target;
setInput((previousvalue) => {
console.log(previousvalue.data);
return {
...previousvalue,
[name]: value,
}
});
};
const showdata = (event) => {
event.preventDefault();
try {
axios.post("http://localhost:8091/subs", {
username: input.username,
password: input.password,



})
.then(response => {
console.log(response.data.response);



// const a = localStorage.setItem("auth", JSON.stringify(response.data.response))
nav("/login");
alert("User register")



})
}
catch (error) {
console.log("error is", error)
};
}
  return (
    <div className="register">
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
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.aajtak.in/" target="_blank">News</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      
      <h1>Register Page</h1>
      
      <form >
      <div>
            <label >Username</label>
            <input type="user" class="form-control"  name="username" placeholder="Enter username" onChange={inputEvent} value={input.username}required />
          </div>
          <div>
              <label >Email id</label>
              <input type="user" class="form-control"  id="email"  placeholder="Enter Email id" />
            </div>
            <div>
              <label >Mobile no</label>
              <input type="user" class="form-control"  id="mobile"  placeholder="Enter Mobile no" />
            </div>
          <div class="mb-3">
            <label >Password</label>
            <input type="password" class="form-control"  name="password" placeholder="Enter password" onChange={inputEvent} value={input.password}required  />
          </div>
         
{/* 
      

     
        <input type="password" name="password" placeholder="create password" onChange={inputEvent} value={input.password}required /> */}
       
        <button type="Register" class="btn btn-success" onClick={showdata}>Register</button>
        <a className="try" href="/login">Already haven't Account?</a>

      </form>

    </div>
  );
}


export default Register;