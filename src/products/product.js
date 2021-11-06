import React  from 'react'
import './products.css'
import axios from 'axios'

import { useEffect, useState } from 'react'
import ALLPRODUCT from '../components/allproduct'
import {Link, Redirect} from 'react-router-dom'
import { addProduct } from '../components/redux/cartredux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'



function PRODUCT() {
   const [product, setproduct] = useState([]);
   const [category, setcategory] = useState("");


    const quantity = useSelector(state => state.cart.quantity) 
    console.log(quantity)
    const dispatch=useDispatch();

   function addcart(item){

    dispatch(addProduct({item,quantity}))

    let products = [];
    console.log("hello")
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

   useEffect(async() => {
       const fetchdata=async()=>{
           if(category=="")
           {
           const {data}=await axios.get(`http://localhost:5000/api/product/`)
           setproduct(data)
           }
           else
           {
            const {data}=await axios.get(`http://localhost:5000/api/product?category=${category}`)
            setproduct(data)
           }
       }
       fetchdata()
   }, [category])

     const handler=(e)=>{
     console.log(e.target.value);
     setcategory(e.target.value);
    
        }
    

    

    return (
        <div>

        <div class="container category-container">
        <h1 class="text-center"> All Product</h1>
        <div class="d-flex justify-content-between">
            <div>
               <h2 class="text-center category-heading">
                   New Arrival
               </h2>
            </div>
             <div> 
             <select className="category-features" onChange={e=>{handler(e)}}>
             <option value="">
             all
             </option>
              <option value="Men">
              Mens
              </option>
              <option value="Women">
               Women
              </option>
              <option value="Kids">
              Kids
             </option>
             </select>
             </div>
        </div>
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
                   <button onClick={()=>addcart(item)} class="btn btn-secondary" title="Add to cart">
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


          

           
        </div>
    )
}

export default PRODUCT
