import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

import './nav.css'

function NAV() {
  
  const abc = useSelector(state => state.cart.quantity)
  
  const cartconatiner={
    position:'relative'
  }
 const badge={
  position: 'absolute',
  fontSize: '10px',
  fontWeight: '900',
  color: 'white',
  top: '-7px',
  right: '-9px',
  background: '#0062cc',
  border: '1px solid blue',
  borderRadius: '15px',
  width: '15px'

 };
   
   function gettingcartno()
   {
      if(localStorage.getItem('products')){
      var l = JSON.parse(localStorage.getItem('products')).length;
      return l;
      }    
      return 0; 
     
   }
  var cartno= gettingcartno()
   
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
          <a className="nav-link active ps-5 navbar-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ps-5 navbar-link" aria-current="page" href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ps-5 navbar-link" aria-current="page" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ps-5 navbar-link" aria-current="page" href="/login">LogIn</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active ps-5 navbar-link" aria-current="page" href="/register">SignUp</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active ps-5 me-5 navbar-link" aria-current="page" href="/cart">
        <div style={cartconatiner}>
        <i class="fa" style={{fontsize:"24px"}}  >&#xf07a;</i>
        <span style={badge}> {cartno} </span>
        </div>
        </a>
      </li>
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NAV

