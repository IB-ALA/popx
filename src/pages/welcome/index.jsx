import React from "react";
import { useNavigate } from "react-router-dom";
// import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button
          className="create-account-btn"
          onClick={() => {
            navigate("/create-account");
          }}
        >
          Create Account
        </button>
        <button
          className="login-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
