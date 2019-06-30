import React from 'react';
import {Link} from "react-router-dom";

import './CategoryProductList.scss'

import CategoryProductItem from './CategoryProductItem';

const CategoryProductList = (props) => {
    console.log(props.items);
    return (
        <ul>
            {props.items.map(item =>  <CategoryProductItem key={item.id} data={item}/>)}
        </ul>
    );
};

export default CategoryProductList;