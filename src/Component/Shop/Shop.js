import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>(
        fetch('./products.json')
        .then(res=>res.json())
       .then(data=>setProducts(data))
    ),[])
    const cartHandel=(product=>{
         const NewCart=[...cart,product]
         setCart(NewCart)
    })
    return (
        <div className='shop-style'>
            <div className='product-style'>
                <h3>total products </h3>
                
                {
                    products.map(product=><Product key={product.key} product={product} cartHandel={cartHandel}></Product>)
                }
            </div>
            <div className= 'cart-style'>
              {
               <Cart cart={cart}></Cart> 
              }
            </div>
        </div>
    );
};

export default Shop;