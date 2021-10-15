import React from 'react';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.productDetails;
    return (
        <div className='d-flex mt-3'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="product-details ms-2">
                <h4>{name}</h4>
                <div className="info">
                    <p><small>by: {seller}</small></p>
                    <p>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button onClick={() => props.cartAddHandler(props.productDetails)} className='btn btn-info'>add to cart</button>
                </div>
                <div className="feature"></div>
            </div>
        </div>
    );
};

export default Product;