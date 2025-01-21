import React, { useState } from "react";
import Image from "next/image";
import '../signup/Signup.css';
import "../../src/app/globals.css";
import axios from 'axios';
// import { toast } from 'react-toastify';
import { useRouter } from "next/router";


const Signuppage: React.FC = () => {
  // State for password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    const errors = [];

    if (!firstName) errors.push("first name");
    if (!lastName) errors.push("last name");
    if (!email) errors.push("email");
    if (!phoneNumber) errors.push("phone number");
    if (!password) errors.push("password");
    if (!confirmPassword) errors.push("confirm password");
    if (password !== confirmPassword) errors.push("passwords do not match");
    if (!address) errors.push("address");

    if (errors.length > 0) {
      const errorMessage = errors
        .map((field, index) => {
          if (index === 0) {
            return field.charAt(0).toUpperCase() + field.slice(1);
          } else {
            return field;
          }
        })
        .join(", ")
        .replace(/,([^,]*)$/, " and$1");

      const plural = errors.length > 1 ? "are" : "is";
      const lastWord = errors.length > 1 ? "them" : "it";

      toast.error(
        `${errorMessage} ${plural} most important to create an account, please fill ${lastWord}.`,
        {
          style: {
            width: "1000px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
          },
        }
      );
      return;
    }

    try {
      const response = await axios.post("/api/user", {
        name: `${firstName} ${lastName}`,
        email,
        phoneNumber,
        password,
        address,
      });

      if (response.status === 200) {
        toast.success(response.data.message, {
          style: {
            width: "400px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
          },
        });
        router.push("/"); // Navigate to homepage after success
      } else {
        toast.error(response.data.error, {
          style: {
            width: "400px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
          },
        });
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Something went wrong.", {
        style: {
          width: "400px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
        },
      });
    }
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
          <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" required />
          <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" required />
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
          <input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Phone Number" required />

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
