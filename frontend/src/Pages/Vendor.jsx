import React, { useState } from 'react';
import './Vendor.css'; // Ensure the CSS file is in the correct path

export const Vendor = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Toggle between Login and Registration forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <h1>{isLogin ? 'Vendor Login' : 'Vendor Form'}</h1>
      <form onSubmit={handleSubmit}>
        {/* Vendor Name input for Registration */}
        {!isLogin && (
          <div className="input-group">
            <label htmlFor="vendorname">Vendor Name</label>
            <input
              type="text"
              id="vendorname"
              placeholder="Enter your vendor name"
              required
            />
          </div>
        )}

        {/* Contact Number input for Registration */}
        {!isLogin && (
          <div className="input-group">
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="text"
              id="contactNo"
              placeholder="Enter your phone number"
              required
            />
          </div>
        )}

        {/* Email input */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Address input for Registration */}
        {!isLogin && (
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
        )}

        {/* Password input */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password input for Registration */}
        {!isLogin && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
        )}

        {/* Submit button */}
        <div className="button-container">
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </div>
      </form>

      {/* Toggle between forms */}
      <p onClick={toggleForm} className="toggle-text">
        {isLogin
          ? "Don't have an account? Register as a Vendor"
          : 'Already have an account? Login as a Vendor'}
      </p>
    </div>
  );
};
