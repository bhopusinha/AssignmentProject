import React, { useEffect, useState } from 'react';
import './Cart.css';
import OrgCart from './OrgCart.js';

const Cart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        localCall();
    }, []);

    const localCall = () => {
        setCartData(JSON.parse(localStorage.getItem('setCart')) || []);
    };

    const removeFromCart = (cartId) => {
        let data = JSON.parse(localStorage.getItem('setCart'));
        data = data.filter((item) => {
            return cartId !== item.id; 
        });
        localStorage.setItem('setCart', JSON.stringify(data));
        setCartData(JSON.parse(localStorage.getItem('setCart')) || []);
    }

    return (
        <div className="cart">
            <h2 className='head'>Cart Items</h2>
            <div className="itemHead">
                <p>ITEM</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>FINAL PRICE</p>
                <p>REMOVE</p>
            </div>
            <br />
            <hr />
            <br />
            <div className="itemContent">
                {cartData.length ? cartData.map((item, index) =>
                    <OrgCart key={index} Item={item} removeFromCart={removeFromCart} />
                ) : <h1>no cart added</h1>}
            </div>
        </div>
    );
};

export default Cart;
