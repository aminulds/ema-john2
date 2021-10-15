import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import './shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    // product
    const first5 = fakeData.slice(0, 5);
    const [products, setProducts] = useState(first5);
    // cart
    const [cart, setCart] = useState([]);
    const cartAddHandler = (product) => setCart([...cart, product])
    

    return (
        <div className='container d-flex shop'>
           <div className="col-md-9">
                {
                    products.map(product => <Product productDetails={product} cartAddHandler={cartAddHandler}></Product>)
                }
           </div>

            <div className="col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;