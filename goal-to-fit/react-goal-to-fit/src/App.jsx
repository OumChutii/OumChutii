import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import UserAccount from './Pages/UserAccount/UserAccount';
import ActivityReport from './Pages/ActivityReport/ActivityReport';
import ActivityCreate from './Pages/ActivityCreate/ActivityCreate';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/profile" element={<UserAccount/>}/>
        <Route path="/activity-report" element={<ActivityReport />} /> 
        <Route path="/activity-create" element={<ActivityCreate />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;