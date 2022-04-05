import React from "react";

import { Button } from "reactstrap";
const Payment = () =>
{
    return(
        <div  >
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
        <h1 className="text-center" >Payment Page</h1>
        <div className='container'>
  
        <form >
            <div>
              <label >Email id</label>
              <input type="user" class="form-control" required id="username"  placeholder="Enter Email id" />
            </div>
            <div>
              <label >Name</label>
              <input type="user" class="form-control" required id="username"  placeholder="Enter Name" />
            </div>

            <div>
              <label >Bank Name</label>
              <input type="user" class="form-control" required id="username"  placeholder="Enter Bank Name" />
            </div>           
            <div>
              <label >Card number</label>
              <input type="user" class="form-control" required id="username"  placeholder="Enter Card number" />
            </div> 
            <div>
              <label >IFSC Code</label>
              <input type="user" class="form-control" required id="username"  placeholder="Enter IFSC Code" />
            </div> 
            <div>
              <label >Amount</label>
              <input type="user" class="form-control" required id="username"  placeholder="Enter Amount" />
            </div> 
            {/* <button type="submit" class="btn btn-primary" href="/payment2"  >Pay now</button> */}
            <Button id="btn" href="/payment2" >Buy now</Button>
           
          </form>
        </div>
      </div>
  
      
    )
  }
  
  
  export default Payment;
  
    
