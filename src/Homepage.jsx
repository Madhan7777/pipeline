import React from 'react'
 import "./App.css"

 

function Homepage() {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hostel Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register">Register</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ROOM
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/addroom">Add Room</a></li>
            <li><a class="dropdown-item" href="/viewroom">View Room</a></li>
            <li><hr class="dropdown-divider"/></li>
            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
       
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            STUDENT
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/add">Add Student</a></li>
            <li><a class="dropdown-item" href="/view">View Student</a></li>
            <li><hr class="dropdown-divider"/></li>
            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>  

  </div>
  
  )
  
  

}


export default Homepage

