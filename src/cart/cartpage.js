import React from 'react'
import './cart.css'
import {useState} from 'react'
import { useEffect } from 'react'

function CART() {

    const iconstyle={
        fontSize:"20px",
        margin:"5px",

    }
    const [cartproduct, setcartproduct] = useState([]);

    useEffect(() => {
               const fetchdata=async()=>{
                let products=[]
                if(localStorage.getItem('products')){
                products = JSON.parse(localStorage.getItem('products'));
                  }
                setcartproduct(products);}
            fetchdata()
            },[])

    return (
        <div>
        <div class="container padding-bottom-3x mb-1">
    
        <div class="table-responsive shopping-cart">
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Subtotal</th>
                        <th class="text-center">Discount</th>
                        <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Clear Cart</a></th>
                     </tr>
                </thead>
                <tbody>
                {cartproduct.map(item=>(
                    <tr>
                        <td>
                            <div class="product-item">
                                <a class="product-thumb" href="#"><img src={item.image} alt="Product"/></a>
                                <div class="product-info">
                                    <h4 class="product-title"><a href="#">{item.title}</a></h4><span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span>
                                </div>
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="count-input">
                            <div class="col"> <i class="fas fa-minus-circle" style={iconstyle}></i> 
                              {item.quantity}
                            <i class="fas fa-plus-circle" style={iconstyle}></i> </div>
                           
                            </div>
                        </td>
                        <td class="text-center text-lg text-medium">{item.price}</td>
                        <td class="text-center text-lg text-medium">{item.price}</td>
                        <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>
                    </tr>
                    ))  }
                    
                   
                </tbody>
            </table>
        </div>
    </div>
   
        </div>
    )
}

export default CART
