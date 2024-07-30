import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/Home/Home';
import AddCustomer from './components/Add/AddCustomer';
import EditCustomer from './components/Edit/EditCustomer';
import ViewLoan from './components/View/ViewLoan';
import EditLoan from './components/Edit/EditLoan';
import AddLoan from './components/Add/AddLoan';
import LoginComponent from './components/Auth/LoginComponent';
import RegisterComponent from './components/Auth/RegisterComponent';
import Home1 from './components/Home/Home1';
import ProtectedRoute from './components/Prodect/ProtectedRoute';
import AboutUs from './components/About-us/AboutUs';
import Addcustomer from './components/Add/AddCustomer';
import ViewCustomer from './components/View/ViewCustomer';


// import Register from "./Register";
// import Login from './Login';

function AppRouter() {
  return (
    <Router class="head">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/view" element={<ViewCustomer />} />
          <Route path="/create" element={<Addcustomer />} />
          <Route path="/update/:id" element={<EditCustomer />} />
          <Route path="/viewloan" element={<ViewLoan />} />
          <Route path="/updateloan/:id" element={<EditLoan />} />
          <Route path="/createloan" element={<AddLoan />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutus" element={<AboutUs />} />

        </Route>

        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/" element={<Home />} />
        


      </Routes>
    </Router>
  )
}

export default AppRouter;