import React from 'react';

const Cart = (props) => {
    const{cart}=props;
    console.log(cart)
    let total=0;
    let name=[];
   for(const product of cart){
       total=total+product.price;
        name=[...name,product.name]
   }
    
    return (
        <div>
             <h1>order summary</h1>
             <h5>cart add :{cart.length}</h5>
             <h4>price:{total}</h4>
            <h4> item:{name}</h4>
        </div>
    );
};

export default Cart;