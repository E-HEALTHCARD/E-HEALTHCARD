import './patient.css';
import React, { useState } from "react";
import {id2, name } from './login';
import axios from "axios";
import PatientTable from './patienttable';
import { useNavigate } from 'react-router-dom';

var patients=null;
function Patient(){ 
  const [role, setRole] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();
  async function logout(event) {
    id2=null;
    name=null;
  }
  async function findPatient(event) {
    event.preventDefault();
    try {
      await axios.get("http://localhost:8082/api/user/getentities/{role}/{pincode}")
      .then((res2) => 
        {
       patients=res2;

      }, fail => {
       console.error(fail); // Error!
});
    }
     catch (err) {
      alert(err);
    }
  }
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            E-Healthcard
          </a>
          <button
            data-mdb-collapse-init
            class="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      	<li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
      	 <li class="nav-item">
          <a class="nav-link" href="/about">About us</a>
        </li>
      </ul>
            <div class="d-flex align-items-center">
              <a href="/">
                <button data-mdb-ripple-init type="button" class="btn btn-danger me-2" onClick={logout} >
                  Log-out
                </button>
              </a>
            </div>
          </div>
        
      </nav>
        <div>Welcome {name}</div>
        <p></p>
        <div class="container12">
	<form method='post'onSubmit={findPatient}>
    <p>Enter Pincode to find clinics around you</p>
    <div class="row">
            <select name="gender" id='role' required   value={role}
          onChange={(event) => {
            setRole(event.target.value);
          }}>
                <option value="">Select</option>
                <option value="doctor">Doctor</option>
                <option value="pharmacist">Pharmacist</option>               
            </select>
        </div>
  <div class="form-row">
    <br/>
    <div class="form-group col-md-5">
      <label for="inputZip">Enter Pincode</label>
      <input type="number" class="form-control" id="id" value={pincode} required onChange={(event) => {
            setPincode(event.target.value);
          }}/>
    </div>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary" >Search</button>
</form>
</div>
<div>
<div>{patients}</div>
</div>
</>
    )
}
export default Patient;