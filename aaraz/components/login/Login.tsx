import React, { useState } from "react";
import Image from "next/image";
import '../login/Login.css';
import "../../src/app/globals.css"
import Link from "next/link";



const Loginpage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        {/* Logo Section */}
        <div className="form-logo">
          <Image src="/Image/logo.png"alt="Logo" width={150} height={150} />
        </div>

        <h2>Login</h2>

        {/* Username/Email Field */}
        <input
          type="text"
          placeholder="Username or Email"
          required
          className="input-field"
        />

        {/* Password Field with Visibility Toggle */}
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            required
            className="input-field"
          />
          <span
            className="show-password"
            onClick={togglePasswordVisibility}
            role="button"
            aria-label="Toggle Password Visibility"
          >
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        <a href="#" className="forgot-password">
          Forgot Password
        </a>

        <button type="submit" className="login-button">
          Login
        </button>

        <Link href="/signup" className="create-account">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Loginpage;
