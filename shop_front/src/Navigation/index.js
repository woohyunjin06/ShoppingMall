import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import CategoryList from './CategoryList';


@inject('stores')
@observer
class Navigation extends Component {

    componentDidMount() {
        this.props.stores.categoryStore.getCategories();
    }

    render() {
        let p = this.props.stores.categoryStore;
        return (
            <ul className='menu-bar'>
                {p.categories && <CategoryList categories={p.categories} />}
            </ul>
        )
    }
}

export default Navigation;
