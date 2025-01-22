import React from "react";
import Image from "next/image";
import Link from "next/link";
import '../account/Account.css';
import "../../src/app/globals.css"


const Accounteviewpage: React.FC = () => {
  return (
    <>
    

      {/* Account Container */}
      <div className="account-container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-icon">
            <Image src="/Image/userIcon.png" alt="User Icon" width={150} height={150} />
          </div>
          <h2>Username</h2>
        </div>

        {/* Titles Section */}
        <div className="tittles">
          <div className="tittleH3">My Orders</div>
          <div className="view-all-orders">View All Orders &gt;</div>
          
        </div>
          

        {/* Orders Section */}
        <div className="orders-view">
          <div className="order-img">
            <Image src="/Image/polaroidPic.jpeg" alt="Order Image" width={150} height={150} />
          </div>
          <div className="orders-section">
            <div className="order-item">
              <div className="order-detail">
                <div className="item-title">Polaroid Pic</div>
                <p>
                  <b>Delivery Date:</b> <span>2025-01-01</span>
                </p>
                <p>
                  <b>Delivery Address:</b> <span>No. 123, Main Street, Vavuniya.</span>
                </p>
                <p>
                  <b>Delivery Charge: </b><span>Rs 200</span>
                </p>
                <p>
                <b>Price:</b> <span>Rs 1000</span>
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Status Section */}
          <div className="delivery-section">
            <Link href="/delivert detail">Delivery Details</Link>
            <p>
              Qty: 1 <span></span>
            </p>
            <p>
              Total: <span>Rs 1200</span>
            </p>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Accounteviewpage;
