import React from 'react';
import {Link} from "react-router-dom";
import CartItem from './CartItem'

// import './CategoryList.scss'

const CartList = (props) => {
    return (
        <ul className='cart_list'>
            {props.cartItems.map(item => <CartItem key={item.id} data={item} /> )}
        </ul>
    );
};

export default CartList;