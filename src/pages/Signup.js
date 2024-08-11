import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Signup.css'; // Import the custom CSS file

const Signup = () => {
  const { role } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    gender: '',
    age: '',
    address: '',
    idNumber: '',
    additionalField: '',
    username: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Generate additional fields based on role
  const getAdditionalFields = () => {
    switch (role) {
      case 'patient':
        return (
          <>
            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <input
                type="text"
                id="aadharNumber"
                name="idNumber"
                className="form-control"
                value={formData.idNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                id="weight"
                name="additionalField"
                className="form-control"
                value={formData.additionalField}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 'doctor':
        return (
          <div className="form-group">
            <label htmlFor="hospitalName">Hospital Name</label>
            <input
              type="text"
              id="hospitalName"
              name="additionalField"
              className="form-control"
              value={formData.additionalField}
              onChange={handleChange}
            />
          </div>
        );
      case 'pathologist':
        return (
          <div className="form-group">
            <label htmlFor="labName">Lab Name</label>
            <input
              type="text"
              id="labName"
              name="additionalField"
              className="form-control"
              value={formData.additionalField}
              onChange={handleChange}
            />
          </div>
        );
      case 'pharmacist':
        return (
          <div className="form-group">
            <label htmlFor="pharmaName">Pharma Name</label>
            <input
              type="text"
              id="pharmaName"
              name="additionalField"
              className="form-control"
              value={formData.additionalField}
              onChange={handleChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
      <form className="custom-form">
        <div className="form-columns">
          <div className="form-column">
            <h4>Personal Information</h4>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                className="form-control"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                className="form-control"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-control"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            {getAdditionalFields()}
          </div>
          <div className="form-column">
            <h4>Account Information</h4>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      
      </form>
    </div>
  );
};

export default Signup;
