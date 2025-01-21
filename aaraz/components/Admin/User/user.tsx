import Logo from '../../../public/admin/Image/logo.png';
import "../../../components/Admin/User/user.css"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Users: React.FC = () => {
  return (
    <div className="main-content">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="topbar-logo">
          {/* Using Next.js Image component */}
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </div>
        <input type="search" placeholder="Search..." />
      </div>

      {/* Sidebar and Main Content */}
      <div className="home">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
          <li ><Link href="/admin/dashboard"style={{ color: "#4C394F" }}>Analytics</Link></li>
            <li ><Link href="/admin/product"  style={{ color: "#4C394F" }}>Products</Link></li>
            <li ><Link href="/admin/user"     style={{ color: "#4C394F" }}>Users</Link></li>
            <li ><Link href="/admin/order"    style={{ color: "#4C394F" }}>Orders</Link></li>
            <li ><Link href="/admin/payment"  style={{ color: "#4C394F" }}>Payments</Link></li>
            <li ><Link href="/admin/delivery" style={{ color: "#4C394F" }}>Delivery Details</Link></li>
          </ul>
          <div className="admin-footer">Admin</div>
        </div>

        {/* Users Section */}
        <div className="analytics">
          <div className="background-products">
            <h1>Users</h1>
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic table rows as placeholders */}
                  {[...Array(2)].map((_, index) => (
                    <tr key={index}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
