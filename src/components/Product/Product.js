import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='product'>
            <div className='product-img'>
            <img src={img} alt="" />
            </div>
            <div>
            <h3 className='product-name'>{name}</h3>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p>
                <small>Only ${stock} left in stock - Order soon</small>
            </p>
            <button  className='main-button'
            onClick={()=>{props.handleAddProduct(props.product)}
                }
            >add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;