import React from 'react'
import "./header.css"

function Header() {
  return (
    <div class="navbar1">
      <nav class="navbar  navbar-expand-lg navbar-dark">
    <a class="navbar_head" href="/home1">Loan Management System</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item ">
                <a class="nav-link" href="/home1">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/create">Add Customer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/view">View Customer Data</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/createloan">Add Loan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/viewloan">View All Loan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/aboutus">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">Logout</a>
            </li>
            

        </ul>
    </div>
</nav>
    </div>
  )
}

export default Header
