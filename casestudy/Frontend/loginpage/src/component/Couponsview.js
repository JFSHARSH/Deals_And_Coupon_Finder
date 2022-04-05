import React from "react";
import Allcoupons from "./Allcoupons";
import Navbar from "./Navbar";
 const Couponsview = () =>{
     return (
         <div className="coupon">
         <Navbar/>
         <img src="../images/coupon.png" class="center"/>
         <Allcoupons/>
         </div>
     )
 }
 export default Couponsview;