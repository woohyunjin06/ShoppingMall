import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';
import CartList from "./CartList";

import './Cart.scss'

@inject('stores')
@observer
class Cart extends Component {

    componentDidMount() {
        { this.props.stores.profileStore.user && this.props.stores.cartStore.getCartItems(this.props.stores.profileStore.user.id); }
    }

    render() {
        let profileStore = this.props.stores.profileStore;
        if(profileStore.user === null) {
            alert("로그인후 이용가능한 서비스입니다.");
            return <Redirect to='/user/login' />
        }

        return (
            <div className='root_cart'>
                <div className='cart_label'>장바구니 목록</div>

                { this.props.stores.cartStore.cartItems && <CartList cartItems={this.props.stores.cartStore.cartItems}/> }

                <div className='total_price'>총 금액: <div className='total_price_number'>{ this.props.stores.cartStore.cartItems && this.props.stores.cartStore.price }원</div></div>
            </div>
        )
    }
}

export default Cart;
