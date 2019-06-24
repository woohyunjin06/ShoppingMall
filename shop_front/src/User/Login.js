import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

import './Login.scss';

@inject('stores')
@observer
class Login extends Component {
    componentDidMount() {

    }

    state = {
        username: '',
        password: '',
        goToProfile: false,
        goToRegister: false
    };

    render() {
        if (this.state.goToProfile)
            return <Redirect to='/user'/>;
        if (this.state.goToRegister)
            return <Redirect to='/user/register'/>;

        return (
            <div className='login_container'>
                <div className='login_element_container'>
                    <div className='label-field'>아이디:</div>
                    <div className='form-field'><input value={this.state.username}onChange={this.updateUsername}/></div>
                    <div className='label-field'>비밀번호</div>
                    <div className='form-field'><input value={this.state.password} type='password' onChange={this.updatePassword}/></div>
                    <div><button onClick={this.loginUser}>로그인</button></div>
                    <div><button onClick={this.registerUser}>회원가입</button></div>
                </div>
            </div>
        );
    }

    loginUser = async () => {
        if(await this.props.stores.profileStore.login(this.state) === true) {
            this.setState({
                ...this.state,
                goToProfile: true
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

export default Login;