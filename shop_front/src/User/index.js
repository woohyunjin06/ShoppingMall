import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect, withRouter} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import UserView from './UserView';

@inject('stores')
@observer
class User extends Component {

    render() {
        if (this.props.match && this.props.match.params.command === 'register') {
            return <Register/>
        }
        if(this.props.match && this.props.match.params.command === 'login') {
            return <Login previous={this.props.match.params.command}/>
        }
        if(this.props.match && this.props.match.params.command === 'logout'){
            this.props.stores.profileStore.user = null;
            alert("로그아웃 되었습니다.");
            return <Redirect to='/'/>
        }
        if(this.props.stores.profileStore.user === null) {
            return <Redirect to={`/user/login/${this.props.match.params.command}`}/>
        }
        return (
            <UserView/>
        );
    }
}

export default User;
