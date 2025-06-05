import { useState } from "react";
import InputField from "../../components/inputfield";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>
        Create your <br /> PopX account
      </h2>
      <InputField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Phone number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <InputField
        label="Email address"
        name="email"
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
      <InputField
        label="Company name"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <div className="input-group">
        <label className="input-label">
          Are you an Agency?<span className="required">*</span>
        </label>
        <div className="radio-group">
          <label className="custom-radio">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === "yes"}
              onChange={handleChange}
            />
            <span class="radio-mark"></span>
            Yes
          </label>
          <label className="custom-radio">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={formData.isAgency === "no"}
              onChange={handleChange}
            />
            <span class="radio-mark"></span>
            No
          </label>
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountPage;
