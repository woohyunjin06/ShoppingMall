import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import ProductList from '../Product/ProductList'

import './Home.scss'

@inject('stores')
@observer
class Home extends Component {

    componentDidMount() {
        this.props.stores.productStore.getRecommendPopularProduct();
        this.props.stores.productStore.getRecommendProduct();
        this.props.stores.productStore.getPopularProduct();
    }

    render() {
        let productStore = this.props.stores.productStore;
        return (
            <div className='root_home'>
                <hr/>
                <div className='label_title'>베스트 추천 상품</div>
                <hr/>
                <div>{ productStore.popularRecommendProduct && <ProductList items={productStore.popularRecommendProduct}/>}</div>
                <hr/>
                <div className='label_title'>추천 상품</div>
                <hr/>
                <div>{ productStore.recommendProduct && <ProductList items={productStore.recommendProduct}/>}</div>
                <hr/>
                <div className='label_title'>인기 상품</div>
                <hr/>
                <div>{ productStore.popularProduct && <ProductList items={productStore.popularProduct}/>}</div>
                <hr/>
            </div>
        )
    }
}

export default Home;
