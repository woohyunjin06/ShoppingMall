import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class UserView extends Component {
    componentDidMount() {

    }

    render() {

        return (
            <div>
                로그인 되었습니다.
            </div>
        );
    }


}

export default UserView;