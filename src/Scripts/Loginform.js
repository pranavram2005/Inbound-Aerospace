import React, { useState } from "react";
import "../components/styles/Auth.css";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logged in with", { email, password });
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleLogin}>
        <h2>Sign In</h2>
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
        <button type="submit" className="signin-button">
          Sign In
        </button>
        <div className="signin-links">
          <p>
            Don't have an account yet? <a href="/signup">Create Account</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot your password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
