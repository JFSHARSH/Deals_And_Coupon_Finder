import React from "react";

import { Card, CardBody, Button } from "reactstrap";
import '../App.css';


const Coupons = ({ coupon }) => {
    const copy = (e) =>{
        this.couponcode.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });  

    }
    return (

        <div className="coupon">
        

        
            <CardBody>
                <Card className="text-center" id="abc">



                    <table>

                        <tr>

                            <td><strong>title</strong></td>

                            <td>{coupon.title}</td>

                        </tr>

                        <tr>

                            <td><strong>Price</strong></td>

                            <td>{coupon.price}</td>

                        </tr>

                        <tr>

                            <td><strong>rating</strong></td>

                            <td>{coupon.rating}</td>

                        </tr>
                        <tr>

                            <td><strong>Discount</strong></td>

                            <td>{coupon.discount}</td>
                            <a href='http://localhost:8084/paymentDetails'>

                                <button>Proceed to Checkout</button>

                                    </a>

                        </tr>
                        {/* <tr>

                            <td><strong>couponcode</strong></td>
                            <div className="tag">
                            <td>{coupon.couponcode}</td>
                            <Button id="btn" href="/payment" >Buy now</Button>
                            </div>
                        </tr> */}

                    </table>




                </Card>
            </CardBody>

        </div>
    )
}
export default Coupons;
