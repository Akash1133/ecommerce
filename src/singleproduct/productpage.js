import React,{useEffect ,useState} from 'react'
import { useLocation  } from 'react-router';
import axios from 'axios';

import './productpage.css'

function PRODUCTPAGE() {
    
  const[product,setproduct]= useState([]);
  const location=useLocation();
  const id=location.pathname.split("/")[2];
 
  useEffect(async() => {
    const fetchdata=async()=>{
        
        const {data}=await axios.get(`http://localhost:5000/api/product/find/${id}`)
        setproduct(data)
        }
    fetchdata()
}, [id])
          
        




    return (
        <div>
        <section>
        <div class="container">
            <div class="row ">
            
                <div class="col-md-5">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src={product.img} alt="First slide"/>
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src={product.img} alt="Second slide"/>
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src={product.img} alt="Third slide"/>
                          </div>
                        </div>
                      </div>

                </div>
                <div class="col-md-7">
                     <p class="newarrival text-center">New</p>
                     <h2 class="heading">Men's T Shirts V Neck Blue Color</h2>
                     <p>Product Code:ISRC2018</p>
                     <p class="price">  INR {product.price}</p>
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
                <img src={product.img} class="fluid"/>
                
            </div>   
        </div>
            <div class="col-lg-3">
              <div class="card">
                <img src={product.img} class="fluid"/>
               
            </div> 
            </div>
            <div class="col-lg-3">
              <div class="card">
                <img src={product.img} class="fluid"/>
                
            </div> 
            </div>
            <div class="col-lg-3">
              <div class="card">
                <img src={product.img} class="fluid"/>
               
            </div> 
            </div>
        </div>
      </div>
  </section>
        </div>
    )
}

export default PRODUCTPAGE
