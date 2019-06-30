import React from 'react';

import NoImage from '../Product/noimage.png'
import {Link} from "react-router-dom";

const CategoryProductItem = ({data}) => {

    // const [state, setState] = React.useState(0);

    return (
        <li className='item_product'>
            <Link to={`/product/view/${data.id}`}>
                { data.imageId &&  <img src={'http://localhost:8080/api/attachment/' + data.imageId} />}
                { !data.imageId &&  <img src={NoImage} />}

                <div>{data.title}</div>
                <div className='price'>{data.price}원</div>
            </Link>
        </li>
    );

};

export default CategoryProductItem;