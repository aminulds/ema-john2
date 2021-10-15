import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let itemPrice = cart.reduce((total, prd) => total + prd.price, 0).toFixed(2);
    itemPrice = Number(itemPrice);
    let shipping = cart.reduce((shipping, prd) => shipping + prd.shipping, 0).toFixed(2);
    shipping = Number(shipping);
    let totalPrice = (itemPrice + shipping).toFixed(2);
    totalPrice = Number(totalPrice);
    let tax = (totalPrice * 0.15).toFixed(2);
    tax = Number(tax);
    const grandTotal = (totalPrice + tax).toFixed(2);

    console.log(cart);
    return (
        <div className='mt-3 text-center'>
            <h5>Order Summery</h5>
            <p>Items Ordered: {cart.length} </p>
            <table className='text-start'>
                <tr>
                    <td>Items: </td>
                    <td>${itemPrice}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling: </td>
                    <td> ${shipping}</td>
                </tr>
                <tr>
                    <td>Total before tax: </td>
                    <td>${totalPrice}</td>
                </tr>
                <tr>
                    <td>Estimated tax: </td>
                    <td>${tax}</td>
                </tr>
                <tr className='order-total'>
                    <td>Grand Total: </td>
                    <td>${grandTotal}</td>
                </tr>
            </table>
            <a href="/review">
                <button className='btn btn-primary mt-3'><span>Review your order</span></button>
            </a>
        </div>
    );
};

export default Cart;