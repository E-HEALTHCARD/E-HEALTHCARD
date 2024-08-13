import './login.css';
import React from "react";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export var id2=null;
export var name=null;
function Login() {
  const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8082/api/user/login", {
          id:id,
          password:password,
          }).then((res) => 
          {
           console.log(res.data);
           
           if (res.data.message ==="login failed") 
           {
             alert("id does not exits");
           } 

           else if(res.data.message ==="password not matched")
           { 
              
            alert("password not matched");
           } 
           else if(res.data.message ==="patient")
            {
               name=res.data.name; 
               id2=res.data.id;
              navigate('/patient');
            }
            else if(res.data.message === "doctor")
              { 
                name=res.data.name; 
                id2=res.data.id;
                navigate('/doctor');
              }
              else if(res.data.message === "admin")
                { 
                  name=res.data.name; 
                  id2=res.data.id;
                  navigate('/admin');
                }
                else if(res.data.message === "pharmacist")
                  { 
                    name=res.data.name; 
                    id2=res.data.id;
                    navigate('/pharmacist');
                  }
                  else if(res.data.message === "pathlab")
                    { 
                      name=res.data.name; 
                      id2=res.data.id;
                      navigate('/pathlab');
                    }
           else if(res.data.message ==="Email not exist")
            { 
               
              alert("id not exits");
            }
            
            else 
           { 
            navigate('/home');
           }
        }, fail => {
         console.error(fail); // Error!
});
      }
       catch (err) {
        alert(err);
      }
    }
    return (
      <div className="login1">
        <h1 class="title1">E-Health Card</h1>
  <image src='login page.jpeg'/>
  <div class="login-container">
      <div class="login-form">
          <h2>Login</h2>
          <form action="/patient-login" method="post">
              <input type="number" id='id' onChange={(event) => {
            setId(event.target.value);
          }} name="id" placeholder="id" required/><br/><br/>
              <input type="password" id='password'  onChange={(event) => {
            setPassword(event.target.value);
          }} name="password" placeholder="Password" required/><br/><br/>
              <input type="submit" value="Login" onClick={login}/>
          </form>
          <div>
              <a href="/registerpatient">Register</a> 
          </div>
          </div>
          </div>
      </div>
    );
  }
  export default Login;