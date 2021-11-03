import React from 'react'
import image1 from './static/image1.jpg'
import image2 from './static/image2.jpg'
import image3 from './static/image3.jpg'
import product1 from './static/product-1.jpg'
import product2 from './static/product-2.jpg'
import product3 from './static/product-3.jpg'
import product4 from './static/product-4.jpg'

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

          <div className="container ">
            <div className="row justify-content-start text-left">
              <div class="col-lg-8 mx-auto">
              <div className="animated animatedFadeInUp fadeInUp">
                <p>
                  WINTER COLLECTION 2020
                </p>
                <h1>
                  Get up to 30% off
                </h1>
                <h1>New Arrival</h1>
                </div>
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
              <div className="animated animatedFadeInUp fadeInUp">
                <p>
                  WINTER COLLECTION 2020
                </p>
                <h1>
                  Get up to 30% off
                </h1>
                <h1>New Arrival</h1>
                </div>
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
              <div className="animated animatedFadeInUp fadeInUp">
                <p>
                  WINTER COLLECTION 2020
                </p>
                <h1>
                  Get up to 30% off
                </h1>
                <h1>New Arrival</h1>
                </div>
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
                 <div class="card product_item">
                   <img src={product1} className="fluid"/>
                  
                   <ul className="product_hover">
                   <li><a href="#"><i class="fa-solid fa-cart-shopping icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-heart icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-magnifying-glass icn"></i></a></li>
                   </ul>
                
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div>   
           </div>
               <div className="col-lg-3">
                 <div class="card product_item">
                   <img src={product2} className="fluid"/>
                   <ul className="product_hover">
                   <li><a href="#"><i class="fa-solid fa-cart-shopping icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-heart icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-magnifying-glass icn"></i></a></li>
                   </ul>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div> 
               </div>
               <div className="col-lg-3">
                 <div class="card product_item">
                   <img src={product3} className="fluid"/>
                   <ul className="product_hover">
                   <li><a href="#"><i class="fa-solid fa-cart-shopping icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-heart icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-magnifying-glass icn"></i></a></li>
                   </ul>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div> 
               </div>
               <div className="col-lg-3">
                 <div class="card product_item">
                   <img src={product4} className="fluid"/>
                   <ul className="product_hover">
                   <li><a href="#"><i class="fa-solid fa-cart-shopping icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-heart icn" ></i></a></li>
                   <li><a href="#"><i class="fa-solid fa-magnifying-glass icn"></i></a></li>
                   </ul>
                   <h5>PRODUCT NAME</h5>
                   <p>Display Price</p>
               </div> 
               </div>
           </div>
         </div>
     </section>
      
     





    </div>

  )
}

export default menu
