import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class ProductView extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>

                

            </div>
        );
    }


    // updatePassword = event => {
    //     this.setState( {
    //         ...this.state,
    //         password: event.target.value
    //     })
    // };
}

export default ProductView;