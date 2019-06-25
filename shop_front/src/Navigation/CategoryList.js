import React from 'react';
import {Link} from "react-router-dom";

import './CategoryList.scss'

const CategoryList = (props) => {
    return (
        <ul className='menu-bar'>
            {props.categories.map(item =>  <li key={item.id}><Link to='/board'>{item.name}</Link></li>)}
        </ul>
    );
};

export default CategoryList;