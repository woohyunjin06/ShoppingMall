import {observable, action} from "mobx";

import axios from 'axios';

class ProductStore {

    static __instance = null;
    static getInstance() {
        if(ProductStore.__instance === null)
            ProductStore.__instance = new ProductStore();
        return ProductStore.__instance;
    }

    @observable popularRecommendProduct = null;
    @action getRecommendPopularProduct = async () => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/product/recommended/popular',
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.popularRecommendProduct = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @observable recommendProduct = null;
    @action getRecommendProduct = async () => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/product/recommended',
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.recommendProduct = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @observable popularProduct = null;
    @action getPopularProduct = async () => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/product/popular',
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.popularProduct = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @observable selectedProduct = null;
    @action getProduct = async (productId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/product/${productId}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.selectedProduct = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @action addCart = async (productId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/cart`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.selectedProduct = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };
}

export default ProductStore.getInstance();