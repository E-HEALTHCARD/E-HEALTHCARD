import './registerpatient.css';
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
function RegisterPatient() {
    const [id, setId] = useState("");
    const [bloodgroup, setBloodgroup] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [pin, setPin] = useState("");
    const [pincode, setPincode] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setDate] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8082/api/user/savePatient", {
        id:id,
        name:name,
        password:password,
        email:email,
        mobile:mobile,
        pincode:pincode,
        pin:pin,
        answer:answer,
        gender:gender,
        bloodgroup:bloodgroup,
        birthdate:birthdate,
        address:address
          }).then(() =>{
            alert("Employee Registation Successfully");
          navigate('/login');
          });
          
        } catch (err) {
          alert(err);
        }
      }
    return (
      <>
        <div class="reg">
      <div class="container">
    <h2>Patient Information</h2>
    <form  method="post" onSubmit={save}>
        <div class="row">
            <input type="number" name="patient_id" placeholder="Aadhar number"id='id' required   value={id}
          onChange={(event) => {
            setId(event.target.value);
          }} />
        </div>

        <div class="row">
            <input type="text" name="full_name" placeholder="Full Name" id='name' required   value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}/>
        </div>

        <div class="row">
            <input type="email" name="email" placeholder="Email" id='email' required   value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}/>
        </div>

        <div class="row">
            <input type="tel" name="mobile_no" placeholder="Mobile No" id='mobile' required value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}/>
        </div>

        {/* <div class="row">
            <input type="text" name="username" placeholder="Username" required/>
        </div> */}

        <div class="row">
            <input type="password" name="password" placeholder="Password" id='password' required    value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}/>
        </div>
        <div class="row">
            <input type="number" name="patient_id" placeholder="4 digit pin" id='pin' required   value={pin}
          onChange={(event) => {
            setPin(event.target.value);
          }} />
        </div>
        <div class="row">
            <select name="gender" id='gender' required   value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="row">
            <input type="text" name="full_name" placeholder="blood group" id='bloodgroup' required   value={bloodgroup}
          onChange={(event) => {
            setBloodgroup(event.target.value);
          }}/>
        </div>
        <div class="row">
            <input type="date" name="date" placeholder="date of birth" id='date' required   value={birthdate}
          onChange={(event) => {
            setDate(event.target.value);
          }}/>
        </div>
        
        <div class="row" >
            <textarea name="address" placeholder="Address" rows="4" id='address' required    value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}></textarea>
        </div>
        <div class="row">
            <input type="number" name="pincode" placeholder="pincode" id='pincode' required     value={pincode}
          onChange={(event) => {
            setPincode(event.target.value);
          }}/>
        </div>
        What is your favourite dish?<br/>
        What is your birthplace?<br/>
        what is your childhood nickname?<br/>
        <div class="row">
            <input type="text" name="full_name" placeholder="answer" id='answer' required   value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
          }}/>
        </div>
        <div class="row">
            <input type="submit" value="Register"/> 
        </div>
        {/* <script>
            function fun(){
                alert("Registered Successfully!!!!")
            }
        </script> */}
        <a href='/doctorregister'>register as a doctor/Pharmacist?</a><br/>
        </form>
</div></div>
      </>
    );
  }
  export default RegisterPatient;