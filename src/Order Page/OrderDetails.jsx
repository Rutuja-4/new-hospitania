
import React from "react";
import CAFFINE from "../Images/CAFFEINE.webp";
import "../Style/orderDetails.css";

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';


const OrderDetails = () => {
  return (
    <>
      <div className="row">
        <div className="col-4"> </div>
        <div className="border col-8">
          <div className="card1-TB p-4 ">
         
            <div>
              <img
                src={CAFFINE}
                height={116}
                width={65}
                className="mt-3 img-caff"
              />
            </div>
            <span className="p-2 ms-3">
              <p className="m-0">1mg Salmon Omega 3 Fish Oil Capsule</p>
              <p className="small text-muted mb-3">bottle of 60 capsules</p>
              <div className="mb-3">
                <strong>₹499 </strong> <del>₹1,000</del><small className="discount">(50% OFF)</small>
              </div>

              <div>
                <LocalShippingOutlinedIcon className="localShip " />    <a href="#" className=" mt-5" > Return Item </a>
              </div>

            </span>
          
          </div>
    <hr id="hr1"/>
          <div class="row">
            <div class="col-sm-9 ms-3 ">
              <div className="border p-4">
                <h5>Order Info</h5>
                <span className="text-muted small list ">
                  <MapOutlinedIcon />  <strong>Delevery Address:</strong>
                  Cavendish Street, Cartmel, Grange-Over-Sands, Cumbria, LA11
                  6PZ
                </span> 
                <span className="text-muted small list">
                  <PhoneIphoneIcon /> <strong>Phone Number:</strong> 1234567890
                </span> 
                <span className="text-muted small list">
                  <CreditCardOutlinedIcon /> <strong> Payment Type:</strong> Stripe
                </span> 
                <span className="text-muted small list">
                  <CalendarTodayOutlinedIcon /> <strong>Order Receive On:</strong> 24 May 2021
                </span> 
              </div>
              <div class="row">
                <div class="col-8 col-sm-6 pt-5">
                  <span>
                    <ExpandCircleDownOutlinedIcon className=" track" /> Order placed

                    <div className="shipping track"> </div>
                    <ExpandCircleDownOutlinedIcon className=" track" /> <b>Order Ready </b>

                    <div className="shipping track"></div>
                    <ExpandCircleDownOutlinedIcon className=" track" /> <b>Way to deliver</b>

                    <div className="shippingGrey track"> </div>
                    <ExpandCircleDownOutlinedIcon className=" track" /> <b>Delivered successfully </b>

                  </span>
                </div>
                <div class="col-4 col-sm-6 mt-5">
                  <div className="trackingDiv">
                    <p className="t-para"> About a min ago</p>
                    <p className="t-para">3 hours ago</p>
                    <p className="t-para">3 hours ago</p>
                    <p className="t-para">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OrderDetails;
