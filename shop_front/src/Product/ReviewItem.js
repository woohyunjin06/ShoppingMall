import React from 'react';

import NoImage from './noimage.png'
import {Link} from "react-router-dom";

import './ReviewItem.scss'

const ReviewItem = (props) => {

    let date = Date.parse(props.data.created);

    return (
        <li className='item_review'>
            <div className='review_name'>{props.data.name.substr(0, 4)}*** : </div>
            <div className='review_content'>{props.data.content}</div>
            <div className='review_date'>{props.data.created.slice(0, 10)}</div>
        </li>
    );

};

export default ReviewItem;