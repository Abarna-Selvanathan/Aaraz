import React, { useState } from "react";
import Image from "next/image";
import '../signup/Signup.css';
import "../../src/app/globals.css"


const Signuppage: React.FC = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form">
          {/* Logo Section */}
          <div className="form-logo">
            <Image src="/Image/logo.png" alt="Logo" width={150} height={150} />
          </div>
          
          {/* Form Title */}
          <h2>Signup</h2>

          {/* Form Fields */}
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />

          {/* Password Field with Toggle */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span className="show-password" onClick={togglePasswordVisibility}>
              👁️
            </span>
          </div>

          {/* Forgot Password Link */}
          <a href="#" className="forgot-password">Forgot Password</a>

          {/* Submit Button */}
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}

export default Signuppage;
