
import React from "react";
import { Link } from "react-router-dom";
import CAFFEINE_1 from '../Images/CAFFEINE_1.jpg'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import HomeIcon from '@mui/icons-material/Home';
import DSSaha_TB from "./DSSaha_TB";
import Footer from "../Footer/Footer";
import "../Style/orderDetails.css";


const OrderDetails = () => {
  return (
    <>
      <div className='firstDiv'>
        <div className='container'>
          <div className="row">
            <div className="col mt-4">
              <h1 className="h3 mb-0">Wishlist</h1>
            </div>
            <div className="col pt-5 mt-5 ">
              <h5 className="mb-1">Order Details</h5>
              <p className="fontSizeP"> You have full control to manage your own Account.</p>
            </div>
            <div className="col-sm ms-5">
              <nav aria-label="breadcrumb text-white">
                <ol className="breadcrumb mt-5 text-white">
                  <li className="breadcrumb-item "> <HomeIcon /> Home </li>
                  <li className="breadcrumb-item">  <HomeIcon />  Account </li>
                  <li className="breadcrumb-item active text-white" aria-current="page"> Wishlist </li>
                </ol>
              </nav>
              <div>
                <button type="button" class="btn blue-btn-TB"> Go Back </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="d-inline">
          <DSSaha_TB />
        </div>

        <div className="d-inline">
          <div className="col mb-5 custom-border">
            <div className="card1-TB p-4 ">

              <div>
                <img
                  src={CAFFEINE_1}
                  height={75}
                  width={65}
                  className="mt-3 img-caff"
                />
              </div>
              <span className="ms-3">
                <p className="m-0">1mg Salmon Omega 3 Fish Oil Capsule</p>
                <p className="small text-muted">bottle of 60 capsules</p>
                <div>
                  <div>
                    <span><strong>₹499 </strong>
                      <del>₹1,000</del><small className="discount">(50% OFF)</small>
                    </span>
                  </div>
                  <div>
                    <LocalShippingOutlinedIcon className="localShip" />
                    <Link to="/orderDetails" className="
                    returnItem-TB" >  Return Item </Link></div></div>
              </span>

            </div>
            <hr id="hr1" />
            <div class="row">
              <div class="col m-3 ">
                <div className="p-3 border orderInfoBox-TB">
                  <h5>Order Info</h5>
                  <span className="text-muted list">
                    <MapOutlinedIcon />  <strong>Delevery Address:</strong>
                    Cavendish Street, Cartmel, Grange-Over-Sands, Cumbria, LA11
                    6PZ
                  </span>
                  <span className="text-muted list">
                    <PhoneIphoneIcon className="iconsSize"/> <strong>Phone Number:</strong> 1234567890
                  </span>
                  <span className="text-muted list">
                    <CreditCardOutlinedIcon /> <strong> Payment Type:</strong> Stripe
                  </span>
                  <span className="text-muted list">
                    <CalendarTodayOutlinedIcon /> <strong>Order Receive On:</strong> 24 May 2021
                  </span>
                </div>

                <div class="row">
                  <div class="col pt-4">
                    <span>
                      <div className="circle d-inline">
                        <ExpandCircleDownOutlinedIcon className=" track" />
                      </div>
                      <span className="ms-3">  Order placed  </span>

                      <div className="shipping mb-2 mt-2"> </div>
                      <div className="circle d-inline">
                        <ExpandCircleDownOutlinedIcon className=" track " />
                      </div>
                      <span> <b className="ms-3">Order Ready </b> </span>

                      <div className="shipping mb-2 mt-2"> </div>
                      <div className="circle-grey d-inline">
                        <ExpandCircleDownOutlinedIcon className="track-grey" />
                      </div>
                      <span> <b className="ms-3"> Way to deliver</b> </span>

                      <div className="shippingGrey  mb-2 mt-2"> </div>
                      <div className="circle-grey d-inline">
                        <ExpandCircleDownOutlinedIcon className=" track-grey" />
                      </div>
                      <span> <b className="ms-3"> Delivered successfully </b> </span>
                    </span>
                  </div>
                  <div class="col mt-5">
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
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
};

export default OrderDetails;
