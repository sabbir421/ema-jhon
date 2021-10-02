import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    
    const{name,img,category,price}=props.product;
    return (
        <div className='product'>
          <div>
          <img src={img} alt="" />
          </div>
           <div>
           <h4>{name}</h4>
           <p>{category}</p>
           <p>{price}</p>
           <button onClick={()=>props.cartHandel(props.product)}
            className='btn'>buy now</button>
           </div>
        </div>
    );
};

export default Product;