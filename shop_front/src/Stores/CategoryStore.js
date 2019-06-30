import {observable, action} from "mobx";

import axios from 'axios';

class CategoryStore {

    static __instance = null;
    static getInstance() {
        if(CategoryStore.__instance === null)
            CategoryStore.__instance = new CategoryStore();
        return CategoryStore.__instance;
    }

    @observable categories = null;
    @action getCategories = async () => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/category',
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.categories = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };

    @observable categoryProductItems = null;
    @action getCategoryProduct = async (categoryId) => {
        this.categoryProductItems = null;
        try {
            let response = await axios({
                url: `http://localhost:8080/api/product/category/${categoryId}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.data.status === 200) {
                this.categoryProductItems = response.data.data;
            }
        } catch(ex) {
            alert(ex.toLocaleString());
        }
    };
}

export default CategoryStore.getInstance();