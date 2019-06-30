import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect, withRouter} from 'react-router-dom';

import './Login.scss';

@inject('stores')
@observer
class Login extends Component {
    componentDidMount() {

    }

    state = {
        username: '',
        password: '',
        goToMain: false,
        goToRegister: false
    };

    render() {
        if (this.state.goToMain)
            this.props.history.goBack();
        if (this.state.goToRegister)
            return <Redirect to='/user/register'/>;

        return (
            <div className='login_container'>
                <div className='login_element_container'>
                    <input value={this.state.username} placeholder='아이디' onChange={this.updateUsername}/>
                    <input value={this.state.password} placeholder='비밀번호' type='password' onChange={this.updatePassword}/>
                    <button onClick={this.loginUser}>로그인</button>
                    <div className='plz_register'>
                    <div>회원이 아니세요?</div><div className='plz_register_highlight' onClick={this.registerUser} >새로운 계정을 만드세요!</div>
                    </div>
                </div>
            </div>
        );
    }

    loginUser = async () => {
        if(await this.props.stores.profileStore.login(this.state) === true) {
            this.setState({
                ...this.state,
                goToMain: true
            });
        }
        else {
            this.setState({
                ...this.state,
                password: ''
            });
            alert("아이디 또는 비밀번호를 확인해주세요.");
        }
    };
    registerUser = async () => {
        this.setState({
            ...this.state,
            goToRegister: true
        })
    };
    updateUsername = event => {
        this.setState( {
            ...this.state,
            username: event.target.value
        })
    };
    updatePassword = event => {
        this.setState( {
            ...this.state,
            password: event.target.value
        })
    };
}

export default withRouter(Login);