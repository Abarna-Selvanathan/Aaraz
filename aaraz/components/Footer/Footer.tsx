import React from "react";
import Link from "next/link";
import './Footer.css';
import "../../src/app/globals.css"

const Footer: React.FC = () => {
  return (
    <footer >
     
        <div className="footer-link">

          <Link href="/">Aaraz</Link>
          <Link href="/contact-information">Contact Information</Link>
          <Link href="/terms-conditions">Terms and Conditions</Link>
          <Link href="/delivery-policy">Delivery Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/account">Account</Link>
          <Link href="/login">Login</Link>
        </div>

        <div className="footer-logo">
            <img src="/Image/logo.png" alt="Company Logo" width={90} height={90} />
        </div> 
       
       
    </footer>
  );
};

export default Footer;
