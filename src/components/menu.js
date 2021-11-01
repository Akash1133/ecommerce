import React from 'react'
import image1 from './static/image1.jpg'
import image2 from './static/image2.jpg'
import image3 from './static/image3.jpg'
import './menu.css'

function menu() {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={image1} className="d-block w-100 xyz" alt="..."/>
        <div className="carousel-caption d-none d-md-block">

          <div className="container">
            <div className="row justify-content-start text-left">
              <div class="col-lg-8 mx-auto">
                <p>
                  WINTER COLLECTION 2020
                </p>
                <h1>
                  Get up to 30% off
                </h1>
                <h1>New Arrival</h1>
                <button className="slider-btn">
                  SHOP NOW
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={image2} className="d-block w-100 xyz " alt="..."/>
        <div className="carousel-caption d-none d-md-block">
                    
        <div className="container">
            <div className="row justify-content-start text-left">
              <div class="col-lg-8 mx-auto">
                <p>
                  WINTER COLLECTION 2020
                </p>
                <h1>
                  Get up to 30% off
                </h1>
                <h1>New Arrival</h1>
                <button className="slider-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={image3} className="d-block w-100 xyz" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <div className="container">
            <div className="row justify-content-start text-left">
              <div class="col-lg-8 mx-auto">
                <p>
                  WINTER COLLECTION 2020
                </p>
                <h1>
                  Get up to 30% off
                </h1>
                <h1>New Arrival</h1>
                <button className="slider-btn">
                  SHOP NOW
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
     <section>
         <div className="container py-5">
           <h1 className="text-center">New Collection</h1>
           <div className="row py-5">
               <div className="col-lg-3">
                 <div class="card">
                   <img src={image1} className="fluid"></img>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div>   
           </div>
               <div className="col-lg-3">
                 <div class="card">
                   <img src={image1} className="fluid"></img>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div> 
               </div>
               <div className="col-lg-3">
                 <div class="card">
                   <img src={image1} className="fluid"></img>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div> 
               </div>
               <div className="col-lg-3">
                 <div class="card">
                   <img src={image1} className="fluid"></img>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div> 
               </div>
           </div>
         </div>
     </section>
      
      <section>
             <div className="footer">
                   
             <div className="container">
                <div className="row">
                     <div className="col-md-4 footer-heading">
                       <h1>
                         MY SHOP
                       </h1>
                     </div>  
                     <div className="col-md-2">
                          <ul>
                              <li>
                                <h4>Heading</h4>
                              </li>
                              <li>
                                links
                              </li>
                              <li>
                                links
                              </li>
                              <li>
                                links
                              </li>
                          </ul>
                     </div>  
                     <div className="col-md-2">
                     <ul>
                              <li>
                           <h4>Heading</h4>
                                
                              </li>
                              <li>
                                links
                              </li>
                              <li>
                                links
                              </li>
                              <li>
                                links
                              </li>
                          </ul>
                     </div>  
                     <div className="col-md-4 footer-heading">
                     <div class="form-group mx-sm-3 mb-2">
                     <input type="text" class="form-control" />
                     </div>
                     <button type="submit" class="btn btn-primary mb-2">Submit</button>
  
                     </div>  

                </div>
             
             </div>
             </div>
      </section>





    </div>

  )
}

export default menu
