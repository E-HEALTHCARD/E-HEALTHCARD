import React from 'react';
import { useParams } from 'react-router-dom';
import './loginstyle.css'; // Import the custom CSS file

const Login = () => {
  const { role } = useParams();
  
  // Define headings based on user type
  const getHeading = () => {
    switch (role) {
      case 'patient':
        return 'Patient Sign In ';
      case 'doctor':
        return 'Doctor Sign In';
      case 'pharmacist':
        return 'Pharmacist Sign In';
      case 'pathologist':
        return 'Pathologist Sign In';
      default:
        return 'Sign In';
    }
  };
  
  return (
    <div>
      <div className="container">
        <h2 className="login-heading">{getHeading()}</h2>
        <form className="custom-form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" 
            placeholder='Email'id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control"
            placeholder='Password' id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
