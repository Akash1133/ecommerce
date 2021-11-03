import React from 'react'
import './products.css'
import product1 from '../components/static/product-1.jpg'
import product2 from '../components/static/product-2.jpg'
import product3 from '../components/static/product-3.jpg'
import product4 from '../components/static/product-4.jpg'

function product() {
    return (
        <div>
        <div class="container category-container">
        <h1 class="text-center"> All Products </h1>
         <div class="d-flex justify-content-between">
             <div>
                <h2 class="text-center category-heading">
                    New Arrival
                </h2>
             </div>
              <div> 
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
              </div>
         </div>
         
         
         <div class="select-category">


         </div>
         <div class="row mt-5">
             <div class="col-md-3">
                <div class="card product-top">
                    <img src={product1} alt="" class="img-fluid"/>
                    <div class="overlay">
                        <button type="button" class="btn btn-secondary" title="quick shop">
                            <i class=" category-icon fa-solid fa-eye"></i>
                             
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add shop">
                            <i class=" category-icon fa-solid fa-heart"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add to cart">
                            <i class="category-icon fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <h3>DRESS</h3>
                    <h5><i class="fas fa-rupee-sign"></i> 500</h5>
                </div>
             </div>


             <div class="col-md-3">
                <div class="card product-top">
                    <img src={product2} alt="" class="img-fluid"/>
                    <div class="overlay">
                        <button type="button" class="btn btn-secondary" title="quick shop">
                            <i class="category-icon fa-solid fa-eye"></i>
                             
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add shop">
                            <i class="category-icon fa-solid fa-heart"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add to cart">
                            <i class="category-icon fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <h3>DRESS</h3>
                    <h5><i class="fas fa-rupee-sign"></i> 500</h5>
                </div>
             </div>





             <div class="col-md-3">
                <div class="card product-top">
                    <img src={product3} alt="" class="img-fluid"/>
                    <div class="overlay">
                        <button type="button" class="btn btn-secondary" title="quick shop">
                            <i class="category-icon fa-solid fa-eye"></i>
                             
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add shop">
                            <i class="category-icon fa-solid fa-heart"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add to cart">
                            <i class="category-icon fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <h3>DRESS</h3>
                    <h5><i class="fas fa-rupee-sign"></i> 500</h5>
                </div>
             </div>


             <div class="col-md-3">
                <div class="card product-top">
                    <img src={product4} alt="" class="img-fluid"/>
                    <div class="overlay">
                        <button type="button" class="btn btn-secondary" title="quick shop">
                            <i class="category-icon fa-solid fa-eye"></i>
                             
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add shop">
                            <i class="category-icon fa-solid fa-heart"></i>
                        </button>
                        <button type="button" class="btn btn-secondary" title="Add to cart">
                            <i class="category-icon fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
                <div class="text-center">
                    <h3>DRESS</h3>
                    <h5><i class="fas fa-rupee-sign"></i> 500</h5>
                </div>
             </div>

         </div>
        </div>
        </div>
    )
}

export default product
