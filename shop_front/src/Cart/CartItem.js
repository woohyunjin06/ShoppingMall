import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';
import CartList from "./CartList";
import NoImage from '../Product/noimage.png'

import './CartItem.scss'


@inject('stores')
@observer
class CartItem extends Component {

    state = {
        count: 1
    };

    componentDidMount() {
        console.log(this.props);
        { this.props.stores.profileStore.user && this.props.stores.cartStore.getCartItems(this.props.stores.profileStore.user.id); }
    }

    render() {
        return(
            <div className='root_cart_item'>
                { this.props.data.imageId &&  <img className='cart_item' src={'http://localhost:8080/api/attachment/' + this.props.data.imageId} />}
                { !this.props.data.imageId &&  <img className='cart_item' src={NoImage} />}

                <div className='description' >
                    <div className='cart_title'>{this.props.data.title}</div>
                    <hr/>
                    <div className='cart_bottom'>
                        <div className='empty_area'/>
                        <div className='cart_price'>{this.props.data.price}원</div>
                        <input className='cart_count' type='number' value={this.state.count} max='10' min='1' onChange={this.updateCount} onKeyDown={this.onKeyDown}/>
                        <div className='cart_total_price_label'>총금액</div>
                        <div className='cart_total_price'>{this.props.data.price * this.state.count}원</div>
                        <button onClick={this.deleteCartItem} className='cart_delete_btn'>X</button>
                    </div>
                </div>
            </div>
        );
    }

    deleteCartItem = async () => {
        if(await this.props.stores.cartStore.deleteCartItem(this.props.data.cartId) === true) {
            this.props.stores.cartStore.getCartItems(this.props.stores.profileStore.user.id);
        } else {
            alert("삭제하지 못했습니다");
        }
    };

    updateCount = event => {
        this.setState( {
            ...this.state,
            count: event.target.value
        });
        this.props.stores.cartStore.setItemCount(this.props.data.cartId, event.target.value);
    };

    onKeyDown = event => {
        event.preventDefault();
        return false;
    }
}

export default CartItem;
