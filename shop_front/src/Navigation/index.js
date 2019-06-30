import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import CategoryList from './CategoryList';
import {Link, withRouter} from "react-router-dom";

@inject('stores')
@observer
class Navigation extends Component {

    componentDidMount() {
        this.props.stores.categoryStore.getCategories();
    }

    render() {
        return (
            <header className='app-header' style={{zIndex: '100'}}>
                <div className='navigator'>
                    <Link to='/'>메인</Link>
                    <Link to='/cart'>장바구니</Link>
                    {!this.props.stores.profileStore.user && <Link to='/user/login'>로그인</Link>}
                    { this.props.stores.profileStore.user && <Link to='/user/logout'>로그아웃</Link>}
                </div>

                {this.props.stores.categoryStore.categories &&
                this.props.history.location.pathname !== '/user/login' && this.props.history.location.pathname !== '/user/register'  &&
                <CategoryList categories={this.props.stores.categoryStore.categories}/> }
            </header>
        )
    }
}

export default withRouter(Navigation);
