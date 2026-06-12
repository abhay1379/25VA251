import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      tempErrors.email = "Invalid email";
    }

    if (formData.password.length < 6) {
      tempErrors.password = "Password must be 6+ characters";
    }

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful");
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <p>
        API data: {apiData ? apiData.name : "Loading..."}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>
      </form>

      {Object.keys(errors).length === 0 && (
        <p className="success"></p>
      )}
    </div>
  );
};

export default RegistrationForm;