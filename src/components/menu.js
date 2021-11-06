import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import image1 from './static/image1.jpg'
import image2 from './static/image2.jpg'
import image3 from './static/image3.jpg'
import { Link } from 'react-router-dom'
import { addProduct } from './redux/cartredux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import './menu.css'


function MENU() {
  const [product, setproduct] = useState([]);
  
  useEffect(async() => {
    const fetchdata=async()=>{
        
        const {data}=await axios.get(`http://localhost:5000/api/product?new=4`)
        setproduct(data)
        }
        fetchdata()
     }, [])
    
     const quantity = useSelector(state => state.cart.quantity) 
     console.log(quantity)
      const dispatch=useDispatch();
      
      function handleclick(item)
      {
          dispatch(addProduct({item,quantity}))

          let products = [];
          if(localStorage.getItem('products')){
              products = JSON.parse(localStorage.getItem('products'));
          }
          if(products.length==0)
               {
                  products.push({'productId' : item._id, 'image' : item.img ,'price':item.price ,'title' :item.title,'quantity':1});
                  localStorage.setItem('products', JSON.stringify(products));
               }
           else{
             if(products.some((p)=> p.productId === item._id))
             {                                                                                                                          
              var a=products.map((p)=>{
                if(p.productId === item._id)
                {
                  var x=p.quantity + 1;
                  var id=p.productId;
                  let storageProducts = JSON.parse(localStorage.getItem('products'));
                  let products = storageProducts.filter(product => product.productId !== id );
                  localStorage.setItem('products', JSON.stringify(products));
                  products.push({'productId' : item._id, 'image' : item.img ,'price':item.price ,'title' :item.title,'quantity':x});
                  localStorage.setItem('products', JSON.stringify(products));
                  return p.productId;
                }
              })
             }
      
             else{
              products.push({'productId' : item._id, 'image' : item.img ,'price':item.price ,'title' :item.title,'quantity':1});
              localStorage.setItem('products', JSON.stringify(products));
             }
             
             }
      }
  
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
           <h1 className="text-center" style={{color:'#0062cc'}}>New Collection</h1>
           <div class="row mt-5">
        {        
        product.map(item=>(
        <div class="col-md-3">
           <div class="card product-top">
           <img src={item.img} alt="" class="img-fluid"/>
               <div class="overlay">
                   <button type="button" class="btn btn-secondary" title="quick shop" >
                   <Link to={`/singleproduct/${item._id}`}> <i class=" category-icon fa-solid fa-eye">
                     
                       </i> </Link>
                        
                   </button>
                   <button type="button" class="btn btn-secondary" title="Add shop">
                       <i class=" category-icon fa-solid fa-heart"></i>
                   </button>
                   <button onClick={()=>handleclick(item)}type="button" class="btn btn-secondary" title="Add to cart">
                       <i class="category-icon fa-solid fa-cart-shopping"></i>
                   </button>
               </div>
           </div>
           <div class="text-center">
               <h3>{item.title}</h3>
               <p><i class="fa fa-inr rupee" aria-hidden="true"></i>{item.price}</p>
           </div>
        </div>
       ))
        }
        </div>
         </div>
     </section>
    </div>

  )
}

export default MENU
