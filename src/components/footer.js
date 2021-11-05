import React from 'react'
import './footerstyle.css'

function footer() {
  return (
    <div>
    <section>
    <div className="footer">
          
    <div className="container">
       <div className="row">
            <div className="col-md-4 footer-heading">
              <h1>
                MY SHOP
              </h1>
            </div>  
            <div className="col-sm-2">
                 <ul>
                      <li><h4>Useful Links</h4></li>
                       <li>Contact Us</li>
                       <li>Terms of Use</li>
                       <li>FAQ</li>
                       <li>Blog</li>
                 </ul>
            </div>  
            <div className="col-sm-2">
            <ul>
            <li><h4>Social</h4></li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Reddit</li>
                    
            </ul>
            </div>  
            <div className="col-sm-4 footer-heading">
            <div class="form-group mx-sm-3 mb-2">
            <input type="text" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary mb-2 footer-button">Submit</button>

            </div>  

       </div>
    
    </div>
    </div>
</section>
    </div>
  )
}

export default footer

