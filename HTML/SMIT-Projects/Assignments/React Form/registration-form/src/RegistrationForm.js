import React, { useState } from "react";
import "./RegistrationForm.css"; // Importing the CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "", // Changed from userId to username
    fullName: "",
    email: "",
    password: "",
    address: "",
    zipCode: "",
    city: "",
    description: "",
    gender: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Username validation
    const usernamePattern = /^[a-z_]+$/;
    if (!usernamePattern.test(formData.username)) {
      setError("Username must contain only lowercase letters and underscores.");
      return;
    }

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      setError(
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    // Gender validation
    if (!formData.gender) {
      setError("Please select a gender.");
      return;
    }

    setError(""); // Clear error if validation passes
    console.log("Form Data Submitted: ", formData);
    // Form submission logic can go here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registration Form</h2>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          pattern="[a-z_]+"
          onChange={handleChange}
          title="Username should only contain lowercase letters and underscores."
          required
        />

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          pattern="[A-Za-z\s]+"
          onChange={handleChange}
          title="Full Name should only contain letters."
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />

        <label>Select City</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Multan">Multan</option>
          <option value="Karachi">Karachi</option>
          <option value="Sialkot">Sialkot</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Gender</label>
        <div className="gender-container">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        {/* Display error message */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
