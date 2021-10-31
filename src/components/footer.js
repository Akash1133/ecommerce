import React from 'react'
import './footerstyle.css'

function footer() {
  return (
    <div className='footer-items'>
     <div className="container-fluid" >
      <div className="row">
       <div className="col-md-2">
        <h3>Section</h3>
        <ul>
        <li className='list-items'>Home</li>
        <li className='list-items'>Pricing</li>
        <li className='list-items'>Features</li>
        <li className='list-items'>FAQ's</li>
        <li className='list-items'>About</li>
        <h3>© 2021 Company, Inc. All rights reserved.</h3>
        </ul>
       </div>
       <div className="col-md-2">
       <h3>Section</h3>
        <ul>
        <li className='list-items'>Home</li>
        <li className='list-items'>Pricing</li>
        <li className='list-items'>Features</li>
        <li className='list-items'>FAQ's</li>
        <li className='list-items'>About</li>
        </ul>
       </div>
       <div className="col-md-2">
       <h3>Section</h3>
       <ul>
       <li className='list-items'>Home</li>
       <li className='list-items'>Pricing</li>
       <li className='list-items'>Features</li>
       <li className='list-items'>FAQ's</li>
       <li className='list-items'>About</li>
       </ul>
       </div>
       <div className="col-md-4">
       <h3>Subscribe to our newsletter</h3>
       </div>
        </div>
      </div>
    </div>
  )
}

export default footer
