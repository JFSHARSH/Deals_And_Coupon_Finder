import React from "react";
import '../App.css';

const About = () =>
{
    return(
        <div >
               
               <form className="set">
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" Link="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <a class="navbar-brand" href="#">Coupon World</a>
                            <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
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
                </form>
                <div className="img">
                    <div className="center">
                        <h3>The best coupon apps can make savings with coupons or coupon codes automatic, or they can help you earn cash back for each dollar you spend. Some require you to scan receipts, yet others let you rack up rewards or score discounts when you connect the debit and credit cards you shop with to your account. Investopedia compared several dozen of the top coupon and coupon code apps on the market today to find the best of the best.</h3>
                        <h3>Coupon apps scour the web to provide digital coupons, promo codes and other point-of-sale savings opportunities for various products and services so you don't have to. Some can even alert you when it finds deals for products you're looking for but haven't found yet.</h3>
                
                    </div>
                </div>
        </div>
    )
}
export default About;