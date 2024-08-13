import { useNavigate } from 'react-router-dom';
import './doctorreg.css';
import axios from "axios";
import React, { useState } from "react";
import { Button } from 'bootstrap';
function Doctorregister(){
    const [id, setId] = useState("");
    const [bloodgroup, setBloodgroup] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [pin, setPin] = useState("");
    const [pincode, setPincode] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [qualification, setQualification] = useState("");
    const [storename, setStorename] = useState("");
    const [university, setUniversity] = useState("");
    const [prn, setPrn] = useState("");
    const [passoutyear, setPassoutyear] = useState("");
    const [answer, setAnswer] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setDate] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8082/api/user/save", {
        id:id,
        name:name,
        password:password,
        email:email,
        mobile:mobile,
        pincode:pincode,
       
        qualification:qualification,
        passoutyear:passoutyear,
        storename:storename,
        university:university,
        prn:prn,
        answer:answer,
        gender:gender,
        bloodgroup:bloodgroup,
        birthdate:birthdate,
        address:address,
        pin:pin,
          }).then(() =>{
            alert("Employee Registation Successfully");
          navigate('/login');
          });
          
        } catch (err) {
          alert(err);
        }
      }
    return(
        <>
        <title>Doctor Registration</title>
        <div class='docreg1'>
        <div class="container99">
    <h2>Doctor Information</h2>
    <form method="post" onSubmit={save}>
        <div class="row">
            <input type="number" name="doctor_id" placeholder="12-digit Aadhar number" required  value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}/>
        </div>

        <div class="row">
            <input type="text" name="full_name" placeholder="Full Name" required  value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}/>
        </div>

        <div class="row">
            <input type="email" name="email" placeholder="Email" required  value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}/>
        </div>

        <div class="row">
            <input type="tel" name="mobile_no" placeholder="Mobile No" required  value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
          }}/>
        </div>

        

        <div class="row">
            <input type="password" name="password" placeholder="Password" value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }} required/>
        </div>
        <div class="row">
            <input type="number" name="pin" placeholder="pin" required  value={pin}
          onChange={(event) => {
            setPin(event.target.value);
          }}/>
        </div>
        <div class="row">
            <input type="text" name="hospital_name" placeholder="Hospital/Store Name"  value={storename}
          onChange={(event) => {
            setStorename(event.target.value);
          }} required/>
        </div>
        <div class="row">
            <input type="text" name="qualification" placeholder="Bloodgroup"  value={bloodgroup}
          onChange={(event) => {
            setBloodgroup(event.target.value);
          }} required/>
        </div>
        <div class="row"  value={gender}
          onChange={(event) => {
            setGender(event.target.value);
          }}>
            <select name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="row">
            <input type="text" name="licence_no" placeholder="prn/License no"  value={prn}
          onChange={(event) => {
            setPrn(event.target.value);
          }} required/>
        </div>
        <div class="row">
            <input type="text" name="qualification" placeholder="Qualification"  value={qualification}
          onChange={(event) => {
            setQualification(event.target.value);
          }} required/>
        </div>
        <div class="row">
            <input type="text" name="university" placeholder="university name" required  value={university}
          onChange={(event) => {
            setUniversity(event.target.value);
          }}/>
        </div>
        <div class="row">
            <input type="number" name="passyear" placeholder="passout year" required  value={passoutyear}
          onChange={(event) => {
            setPassoutyear(event.target.value);
          }}/>
        </div>

        <div class="row">
            <input type="date" name="date" placeholder="date of birth"  value={birthdate}
          onChange={(event) => {
            setDate(event.target.value);
          }} required />
        </div>

        <div class="row">
            <textarea name="address" placeholder="Address" rows="4"  value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }} required></textarea>
        </div>
        <div class="row">
            <input type="number" name="pincode" placeholder="pincode"  value={pincode}
          onChange={(event) => {
            setPincode(event.target.value);
          }} required />
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
    </form>
</div></div>
        </>
    )
}
export default Doctorregister;