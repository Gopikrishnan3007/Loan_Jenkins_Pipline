import React from 'react'
import "./header.css"

function HeaderLogin() {
  return (
    <div class="navbar1">
      <nav class="navbar  navbar-expand-lg navbar-dark">
    <a class="navbar_head" href="/">Loan Management Syatem</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item ">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>
            

        </ul>
    </div>
</nav>
    </div>
  )
}

export default HeaderLogin
