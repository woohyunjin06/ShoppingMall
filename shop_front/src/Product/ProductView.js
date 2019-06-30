import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

import NoImage from './noimage.png'
import './ProductView.scss';
import ReviewList from "./ReviewList";

@inject('stores')
@observer
class ProductView extends Component {
    componentDidMount() {
        this.props.stores.productStore.getProduct(this.props.productId);
        this.props.stores.reviewStore.getReview(this.props.productId);
    }

    state = {
        goToLogin: false,
        productId: this.props.productId*1,
        userId: this.props.stores.profileStore.user ? this.props.stores.profileStore.user.id : '',
        content: '',
    };

    render() {
        if(this.state.goToLogin === true) {
            return <Redirect to='/user/login'/>
        }
        return (
            <div className='root_product_view'>
                <div className='product_simple_info'>
                    <div className='image_frame'>
                        {console.log(this.props.stores.productStore.selectedProduct)}
                        { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.imageId &&  <img className='cart_item' src={'http://localhost:8080/api/attachment/' + this.props.stores.productStore.selectedProduct.imageId} />}
                        { this.props.stores.productStore.selectedProduct && !this.props.stores.productStore.selectedProduct.imageId &&  <img className='cart_item' src={NoImage} />}
                    </div>
                    <div className='product_info'>
                        <div className='product_info_top'>
                            <div className='product_name'>
                                { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.title }
                            </div>
                            <div className='product_company'>
                                { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.company }
                            </div>
                            <hr/>
                        </div>
                        <div className='product_price_holder'>
                            <div className='product_price'>
                                <div className='product_price_label'>시중가:</div>
                                <div className='product_price_number'>
                                    { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.originalPrice }
                                </div>
                                <div className='product_price_text'>
                                    원
                                </div>
                            </div>
                            <div className='product_price'>
                                <div className='product_price_label'>판매가:</div>
                                <div className='product_price_number'>
                                    { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.price }
                                </div>
                                <div className='product_price_text'>
                                    원
                                </div>
                            </div>
                        </div>
                        <div className='product_button'>
                            <div className='product_count'>
                                <input type='number' placeholder='개수' min='0' max='10'/>
                            </div>
                            <button className='product_btn_cart' onClick={this.putCart}>장바구니 담기</button>
                            <button className='product_btn_pay'>바로 구매하기</button>
                        </div>

                    </div>
                </div>

                <hr/>
                <div className='product_title_label'>상세 정보</div>
                <hr/>
                <div className='product_content_label'>
                    { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.detailInfo }
                </div>

                <hr/>
                <div className='product_title_label'>구매 정보</div>
                <hr/>
                <div className='product_content_label'>
                    { this.props.stores.productStore.selectedProduct && this.props.stores.productStore.selectedProduct.purchaseInfo }
                </div>

                <hr/>
                <div className='product_title_label'>상품평</div>
                <hr/>
                <div className='product_content_label'>
                    { this.props.stores.reviewStore.reviewList && <ReviewList items={this.props.stores.reviewStore.reviewList}/> }
                </div>

                {this.props.stores.profileStore.user &&
                <div className='product_review_write'>
                    <div>상품평 달기</div>
                    <textarea value={this.state.content} onChange={this.updateContent}/>
                    <button onClick={this.postReview}>게시하기</button>
                </div>
                }
            </div>
        );
    }
    putCart = async () => {
        let user = this.props.stores.profileStore.user;
        if(user === null) {
            alert("로그인 후 이용가능한 서비스입니다.");
            this.setState( {
                ...this.state,
                goToLogin: true
            });
            return;
        }

        let param = {
            "userId": user.id,
            "productId": this.props.productId
        };
        alert(await this.props.stores.cartStore.addCart(param));
    };
    updateContent = event => {
        this.setState( {
            ...this.state,
            content: event.target.value
        })
    };

    postReview = async() => {
        if(this.state.userId === '') {
            alert("로그인 후 이용가능한 서비스입니다.");
        }

        if(await this.props.stores.reviewStore.addReview(this.state) === true){
            this.props.stores.reviewStore.getReview(this.props.productId);

            this.setState({
                ...this.state,
                content: ''
            })

        } else {
            alert("상품평을 달지 못했습니다.")
        }
    }
}

export default ProductView;