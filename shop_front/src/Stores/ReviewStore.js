import {observable, action} from "mobx";

import axios from 'axios';

class ReviewStore {

    static __instance = null;
    static getInstance() {
        if(ReviewStore.__instance === null)
            ReviewStore.__instance = new ReviewStore();
        return ReviewStore.__instance;
    }

    @observable reviewList = null;
    @action getReview = async (productId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/review/${productId}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.reviewList = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @action addReview = async (review) => {
        console.log(review);
        try {
            let response = await axios({
                url: `http://localhost:8080/api/review`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: review,
            });
            return response.data.status === 200;
        } catch(ex) {
            return false;
        }
    }
}

export default ReviewStore.getInstance();