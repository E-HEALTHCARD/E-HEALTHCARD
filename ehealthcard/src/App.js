import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import RegisterPatient from './components/registerpatient';
import Doctorregister from './components/doctorreg';
import Pharmareg from './components/pharmareg';
import Pathlabreg from './components/pathlabreg';
import Patient from './components/patient';
import Doctor from './components/doctor';
import About from './components/About';
import Pharmacist from './components/Pharmacist';
//use this following commands on terminal before npm start.
// npm install bootstrap --save 
//npm install react-router-dom
//npm add axios
function App() {
  return (
  <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/registerpatient' element={<RegisterPatient/>}/>
    <Route path='/doctorregister' element={<Doctorregister/>}/>
    <Route path='/pharmacistregister' element={<Pharmareg/>}/>
    <Route path='/pathlabregister' element={<Pathlabreg/>}/>  
    <Route path='/login' element={<Login/>}/>  
    <Route path='/about' element={<About/>}/> 
    <Route path='/pharmacist' element={<Pharmacist/>}/>
    <Route path='/patient' element={<Patient/>}/>
    <Route path='/doctor' element={<Doctor/>}/>
    </Routes>
    </>
  );
}

export default App;
