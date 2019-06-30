import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import CategoryProductList from './CategoryProductList'

@inject('stores')
@observer
class Category extends Component {

    componentDidMount() {
        this.props.stores.categoryStore.getCategoryProduct(this.props.match.params.categoryId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.stores.categoryStore.getCategoryProduct(this.props.match.params.categoryId);
    }

    render() {
        return (
            <div className='root_category'>
                { this.props.stores.categoryStore.categoryProductItems && <CategoryProductList items={this.props.stores.categoryStore.categoryProductItems}/>}
            </div>
        )
    }
}

export default Category;
