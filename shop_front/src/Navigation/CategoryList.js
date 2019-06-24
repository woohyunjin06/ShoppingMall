import React from 'react';
import {Link} from "react-router-dom";

const CategoryList = (props) => {
    return (
        <div>
            {props.categories.map(item =>  <li key={item.id}><Link to='/board'>{item.name}</Link></li>)}
        </div>
    );
};

export default CategoryList;