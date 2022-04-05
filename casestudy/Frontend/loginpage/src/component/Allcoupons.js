import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Coupons from "./Coupons";


const Allcoupons=()=>{
    
    const getAllCouponsFromServer=()=>{
        axios.get("http://localhost:8083/coupon/findall").then(
                 (response)=>{
                console.log(response.data);
                setCoupons(response.data);
            },
            (error)=>{
                console.log(error.data);
            }
        )
    };
    
    useEffect(()=>{
        getAllCouponsFromServer();
    },[]);
    
    const[coupon, setCoupons]=useState([]);


    return (

        <div>
<h1>All coupons are as follows</h1>


{coupon.length>0
? coupon.map((item)=><Coupons key={item.id} coupon={item}/>)
: "No Coupons"}

        </div>
    )



}
export default Allcoupons;