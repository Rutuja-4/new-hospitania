/** @format */

import React from "react";
import CAFFINE from "../Images/CAFFEINE.webp";
import "../Style/orderDetails.css";

const OrderDetails = () => {
  return (
    <>
      <div className="card1-TB p-4 ">
        <img
          src={CAFFINE}
          alt=""
          height={116}
          width={65}
          className="mt-3"
        />
        <span className="p-4">
          <p>1mg Salmon Omega 3 Fish Oil Capsule</p>
          <p className="small text-muted">bottle of 60 capsules</p>
          <span>
            <strong>₹499 </strong> <del>₹1,000</del><small class="discount">(50% OFF)</small>
          </span>

          <div>
            <a href="#"> Return Item </a>
          </div>
          <hr />
          <div class="mt-4">
            <div>
              <div class="border p-3">
                <h5>Order Info</h5>
                <p className="text-muted small">
                  <strong>Delevery Address:</strong>
                  Cavendish Street, Cartmel, Grange-Over-Sands, Cumbria, LA11
                  6PZ
                </p>
                <p className="text-muted small">
                  <strong>Phone Number:</strong> 1234567890
                </p>
                <p className="text-muted small">
                  <strong> Payment Type:</strong> Stripe
                </p>
                <p className="text-muted small">
                  <strong>Order Receive On:</strong> 24 May 2021
                </p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </>
  );
};

export default OrderDetails;
