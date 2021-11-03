import React from 'react'
import './nav.css'
function nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ps-5" href="/">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ps-5" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ps-5" aria-current="page" href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ps-5" aria-current="page" href="/register">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ps-5" aria-current="page" href="/login">LogIn</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active ps-5 me-5" aria-current="page" href="/register">SignUp</a>
      </li>
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default nav

