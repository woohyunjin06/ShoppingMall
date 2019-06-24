import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

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
        if(this.props.stores.profileStore.user === null) {
            return <Login/>
        }
        return (
            <UserView/>
        );
    }
}

export default User;
