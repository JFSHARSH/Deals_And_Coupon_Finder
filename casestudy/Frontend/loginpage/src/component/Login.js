import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Login =() =>
{
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
       console.log(input.password);
       console.log(input.username);
      axios.post("http://localhost:8091/auth", {
        username: input.username,
        password: input.password,
      })
        .then(response => {
          console.log(response.data.response);
           const a = localStorage.setItem("auth", JSON.stringify(response.data.response))
        //    if(localStorage.getItem(auth)!=null)
        //    {
        //  nav("/Couponsview");
        //  alert("User Login Successfully")
        // }
        nav("/Couponsview");
        alert("User Login Successfully")
      },
        error => {
        
          alert(" LoginFail...!");
          console.log(error);
      })
    }
    catch (error) {
      console.log("error is", error)
    };
  }



  return(
   
    <div id='body' >
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
      <h1 className="text-center" id='header'>Login Form</h1>
      <div className='container'>

      <form onSubmit={showdata}>
          <div>
            <label >Username</label>
            <input type="user" class="form-control" required name="username"  onChange={inputEvent}    placeholder="Enter username" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" required name="password"  onChange={inputEvent}     placeholder="Enter password"  />
          </div>
         



          <button type="submit" class="btn btn-primary"  >Login</button>
          <a className='warning' href="/registration ">Register Here?</a>
        </form>
      </div>
    </div>

    
  )
}


export default Login;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";




// export default class Login extends Component {
// constructor() {
// super();
// this.state={
// username:'',
// password:'',

// usernameError:'',
// passwordError:'',

// isProfile: false,



// }
// this.login = this.register.bind(this);
// this.handleChange = this.handleChange.bind(this);
// }
// valid(){
// if(this.state.username.length<4 && this.state.password.length<4 ){
// this.setState({usernameError:"Invalid Username",
// passwordError: "Password length should be more than four",

// })
// }
// else if(this.state.username.length<4){
// this.setState({
// usernameError:"Invalid Username"})
// }
// else if(this.state.password.length<4){
// this.setState({
// passwordError:"Password length should be more than four"})
// }



// else{
// return true
// }




// }

// register(e){
// this.setState({usernameError:"",
// passwordError: "",

// })
// e.preventDefault();
// if(this.valid()){
// fetch("http://localhost:8085/auth", {
// "method": "POST",
// "headers": {
// "content-type": "application/json",
// "accept": "application/json",
// "Access-Control-Allow-Origin": "*"

// },
// "body": JSON.stringify({
// username: this.state.username,
// password: this.state.password,

// })
// })
// .then(response => response.json())
// .then(response => {
// alert("you are login")
// })
// .catch(err => {
// alert("Invalid Credentails")
// });
// }
// }

// handleChange(changeObject) {
// this.setState(changeObject)
// }

// render(){
// return (
// <div className="outer" >
    
// <div className="inner">
// <form>
// <h3>Login</h3>



// <div className="form-group">
// <label>UserName</label>
// <input type="text" className="form-control" placeholder="Enter username"
// onChange={(e) => this.handleChange({ username: e.target.value })} />
// <p style={{color:"red" }}>{this.state.usernameError}</p>
// </div>



// <div className="form-group">
// <label>Password</label>
// <input type="password" className="form-control" placeholder="Enter password"
// onChange={(e) => this.handleChange({ password: e.target.value })} />
// <p style={{color:"red" }}>{this.state.passwordError}</p>
// </div>

// <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={(e)=>this.login(e)} >Login</button>

// <p>New User? <Link to="/register">Register Here</Link></p>
// </form>
// </div>
// </div>
// );
// }
// }