import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
   // const total= cart.reduce((total,prd)=>total+prd.price,0);

    let total=0;
    for(let i=0;i<cart.length;i++)
    {
            const product=cart[i];
            total=total+product.price;
    }

    let shipping=0;
    if(total>500)
    {
        shipping=0;
    }
    else if (total>350)
    {
        shipping=300;
    }
    else if(total>0)
    {
        shipping=200.99;
    }
    const tax=total/10;
    const grandTotal=(total+shipping+Number(tax)).toFixed(2);

    const formatNumber=num=>
    {
        const precision=num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p>Tax: {formatNumber(tax)}</p>
            <p>Total Price: {grandTotal}</p>
            
        </div>
    );
};

export default Cart;