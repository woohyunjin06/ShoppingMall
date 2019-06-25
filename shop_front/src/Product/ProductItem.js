import React from 'react';

import NoImage from './noimage.png'

const ProductItem = (props) => {


    return (
        <li>
            { props.data.imageId &&  <img src={'http://localhost:8080/api/product/attachment/' + props.data.imageId} />}
            { !props.data.imageId &&  <img src={NoImage} />}

            <div>{props.data.title}</div>
            <div>{props.data.price}원</div>
        </li>
    );

};

export default ProductItem;