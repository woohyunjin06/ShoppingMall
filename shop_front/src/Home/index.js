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
            <div className='root'>
                <nav>

                </nav>
                <section>
                    <hr/>
                    <div>베스트 추천 상품</div>
                    <hr/>
                    { productStore.popularRecommendProduct && <ProductList items={productStore.popularRecommendProduct}/>}
                    <hr/>
                    <div>추천 상품</div>
                    <hr/>
                    { productStore.recommendProduct && <ProductList items={productStore.recommendProduct}/>}
                    <hr/>
                    <div>인기 상품</div>
                    <hr/>
                    { productStore.popularProduct && <ProductList items={productStore.popularProduct}/>}
                    <hr/>
                </section>
                <aside>
                    ccc
                </aside>
            </div>
        )
    }
}

export default Home;
