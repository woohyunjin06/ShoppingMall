import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import ProductView from './ProductView';

@inject('stores')
@observer
class Product extends Component {

    render() {
    //     if (this.props.match && this.props.match.params.command === 'register') {
    //         return <Register/>
    //     }
    //     if(this.props.stores.profileStore.user === null) {
    //         return <Login/>
    //     }
        return (
            <ProductView productId={this.props.match.params.productId}/>
        );
    }
}

export default Product;
