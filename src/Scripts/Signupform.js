import React, { useState } from "react";
import "../components/styles/Signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <div className="input-container">
            <i className="fas fa-user"></i>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="signup-links">
          <p>
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
