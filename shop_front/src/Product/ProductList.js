import React from 'react';
import {Link} from "react-router-dom";

import './ProductList.scss'

import ProductItem from './ProductItem';

const ProductList = (props) => {
    console.log(props.items);
    return (
        <ul>
            {props.items.map(item =>  <ProductItem key={item.id} data={item}/>)}
        </ul>
    );
};

export default ProductList;