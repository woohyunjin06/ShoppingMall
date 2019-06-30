import React from 'react';
import {Link} from "react-router-dom";

import './ReviewList.scss'

import ReviewItem from './ReviewItem';

const ReviewList = (props) => {
    // console.log(props.items);
    return (
        <ul className='review_list'>
            {props.items.map(item =>  <ReviewItem key={item.id} data={item}/>)}
        </ul>
    );
};

export default ReviewList;