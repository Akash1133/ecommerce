import React from 'react'
import './cart.css'

function CART() {
    return (
        <div>
        <div class="container padding-bottom-3x mb-1">
    
        <div class="table-responsive shopping-cart">
            <table class="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Subtotal</th>
                        <th class="text-center">Discount</th>
                        <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Clear Cart</a></th>
                    </tr>
                </thead>
                <tbody>
  
  
  
                    <tr>
                        <td>
                            <div class="product-item">
                                <a class="product-thumb" href="#"><img src="s1.jpg" alt="Product"/></a>
                                <div class="product-info">
                                    <h4 class="product-title"><a href="#">Unionbay Park</a></h4><span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span>
                                </div>
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="count-input">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </td>
                        <td class="text-center text-lg text-medium">$43.90</td>
                        <td class="text-center text-lg text-medium">$18.00</td>
                        <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>
                    </tr>
  
                    
                   
                </tbody>
            </table>
        </div>
    </div>
        </div>
    )
}

export default CART
