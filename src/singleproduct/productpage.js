import React from 'react'
import './productpage.css'
import product5 from '../components/static/product-5.jpg'
import product1 from '../components/static/product-1.jpg'
import product2 from '../components/static/product-2.jpg'
import product3 from '../components/static/product-3.jpg'
import product4 from '../components/static/product-4.jpg'

function productpage() {
    return (
        <div>
        <section>
        <div class="container">
            <div class="row ">
                <div class="col-md-5">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src={product5} alt="First slide"/>
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src={product5} alt="Second slide"/>
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src={product5} alt="Third slide"/>
                          </div>
                        </div>
                      </div>

                </div>
                <div class="col-md-7">
                     <p class="newarrival text-center">New</p>
                     <h2 class="heading">Men's T Shirts V Neck Blue Color</h2>
                     <p>Product Code:ISRC2018</p>
                     <p class="price"> INR 1200</p>
                     <p><b>Availability:</b> In Stock</p>
                     <p><b>Condition:</b> New</p>
                     <p><b>Brand:</b> XYZ Company</p>
                     <label>Quantity:</label>
                    <input type="text" value="1"/>
                     <button type="button" class="btn btn-default cart">Add to cart</button>
                </div>
            </div>
        </div>
    </section>

    <section>
      <div class="container py-5">
        <h1 class="text-center">Related Products</h1>
        <div class="row py-5">
            <div class="col-lg-3">
              <div class="card">
                <img src={product1} class="fluid"/>
                
            </div>   
        </div>
            <div class="col-lg-3">
              <div class="card">
                <img src={product2} class="fluid"/>
               
            </div> 
            </div>
            <div class="col-lg-3">
              <div class="card">
                <img src={product3} class="fluid"/>
                
            </div> 
            </div>
            <div class="col-lg-3">
              <div class="card">
                <img src={product4} class="fluid"/>
               
            </div> 
            </div>
        </div>
      </div>
  </section>
        </div>
    )
}

export default productpage
