import {observable, action, computed} from "mobx";

import axios from 'axios';

class CartStore {

    static __instance = null;
    static getInstance() {
        if(CartStore.__instance === null)
            CartStore.__instance = new CartStore();
        return CartStore.__instance;
    }

    @action addCart = async (cart) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/cart`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: cart,
            });
            return response.data.message;
        } catch(ex) {
            return ex.toLocaleString();
        }
    };

    @observable cartItems = null;
    @action getCartItems = async (userId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/cart/${userId}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.cartItems = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @action deleteCartItem = async (cartId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/cart/${cartId}`,
                method: 'delete',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            return response.data.status === 200;
        } catch(ex) {
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action setItemCount = (cartId, count) => {
        this.cartItems = this.cartItems.map((v) => {
            if (v.cartId === cartId) {
                v.count = count;
                return v
            }
            return v
        });
    };

    @computed get price() {
        let result = 0;
        this.cartItems.forEach(function(element) {
            result += element.price * element.count;
        });
        return result;
    }
}

export default CartStore.getInstance();