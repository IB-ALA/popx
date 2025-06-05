import React, { useState } from "react";
import InputField from "../../components/inputfield";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const isDisabled = !formData.email || !formData.password;

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h2>
        Signin to your <br /> PopX account
      </h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button className="login-btn" disabled={isDisabled}>
        Login
      </button>
    </form>
  );
};

export default LoginPage;
