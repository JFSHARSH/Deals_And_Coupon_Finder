import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import {Carousel,CarouselItem} from "bootstrap";
import { Table } from "reactstrap";



const Home = () => {
    return (
        <>

            <div className="home">


                <form className="set">
                
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" Link="#"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <a class="navbar-brand" href="#">Coupon World</a>
                                {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
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
                {/* This is apply for Sliders */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../images/flip.jpg" class="d-block w-100" className="first" alt="First image"/>
    </div>
    <div class="carousel-item">
      <img src="../images/Myn.jpg" class="d-block w-100" className="st" alt="Second image"/>
    </div>
    <div class="carousel-item">
      <img src="../images/zomato.jpg" class="d-block w-100" className="t" alt="Third image"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                   <marquee> <h3 id="nav">Welcome to the Coupon world</h3></marquee>
                    <h3>----------------------------------------------OFFERS ON POPULAR Sites-----------------------------------</h3>
                  
                  <div class="row">
                    <div class="column"><img src="../images/m.webp"/></div>
                    <div class="column"><img src="../images/flipkart.jpg"/></div>
</div>
                    <h3>----------------------------------------------OFFERS ON Fooding Sites-------------------------------------</h3>
                  
                   <div class="row">
                     <div class="column"><img src="../images/sc.jpg"/></div>
                     <div class="column"><img src="../images/swiggy.jpg"/></div>
</div>

                </form>

               

            </div>

        </>
    );

}
export default Home;