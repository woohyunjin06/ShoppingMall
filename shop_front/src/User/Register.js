import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

import './Register.scss'

@inject('stores')
@observer
class Register extends Component {
    componentDidMount() {

    }

    state = {
        username: '',
        password: '',
        password_re: '',
        name: '',
        homeNumber: '',
        phoneNumber: '',
        zipCode: '',
        address: '',
        email: '',

        goToProfile: false,
        isAgree: 'no'
    };

    render() {
        if (this.state.goToProfile)
            return <Redirect to='/user'/>;

        return (
                <div className='register_container'>
                    <div className='register_element_container'>
                        <input value={this.state.username} placeholder='아이디' onChange={this.updateUsername}/>
                        <input value={this.state.password} placeholder='비밀번호' type='password' onChange={this.updatePassword}/>
                        <input value={this.state.password_re} placeholder='비밀번호 확인' type='password' onChange={this.updateRePassword}/>
                        <input value={this.state.name} placeholder='이름' onChange={this.updateName}/>
                        <input value={this.state.homeNumber} placeholder='집 전화번호' onChange={this.updateHomeNumber}/>
                        <input value={this.state.phoneNumber} placeholder='휴대폰 전화번호' onChange={this.updatePhoneNumber}/>
                        <input value={this.state.zipCode} placeholder='우편번호' onChange={this.updateZipCode}/>
                        <input value={this.state.address} placeholder='집 주소' onChange={this.updateAddress}/>
                        <input value={this.state.email} placeholder='이메일' onChange={this.updateEmail}/>

                        <textarea className='rule-area' readOnly value="회원약관" />
                        <div className='r_u_agree' onChange={this.updateAgree}>
                            <div><input type='radio' nme='agree' value='yes'/>동의함</div>
                            <div><input type='radio' name='agree' value='no'/>동의하지않음</div>
                        </div>
                        <div><button onClick={this.registerUser}>회원가입</button></div>
                    </div>


                </div>
        );
    }

    registerUser = async () => {
        if(this.state.isAgree === 'no') {
            alert("약관에 동의해주시기 바랍니다.");
            return;
        }
        if(this.state.password !== this.state.password_re) {
            alert("비밀번호가 일치하지 않습니다.");
            this.setState({
                ...this.state,
                password: '',
                password_re: '',
            });
            return;
        }

        let result = await this.props.stores.profileStore.register(this.state);
        if(result.status === 200) {
            alert("회원가입을 환영합니다:D\n로그인을 해주세요.");
            this.setState({
                ...this.state,
                goToProfile: true
            });
        }
        else {
            this.setState({
                ...this.state,
                password: '',
                password_re: ''
            });
            alert(result.message);
        }
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
    updateRePassword = event => {
        this.setState( {
            ...this.state,
            password_re: event.target.value
        })
    };
    updateName = event => {
        this.setState( {
            ...this.state,
            name: event.target.value
        })
    };
    updateHomeNumber = event => {
        this.setState( {
            ...this.state,
            homeNumber: event.target.value
        })
    };
    updatePhoneNumber = event => {
        this.setState( {
            ...this.state,
            phoneNumber: event.target.value
        })
    };
    updateZipCode = event => {
        this.setState( {
            ...this.state,
            zipCode: event.target.value
        })
    };
    updateAddress = event => {
        this.setState( {
            ...this.state,
            address: event.target.value
        })
    };
    updateEmail = event => {
        this.setState( {
            ...this.state,
            email: event.target.value
        })
    };
    updateAgree = event => {
        this.setState( {
            ...this.state,
            isAgree: event.target.value

        });
    }
}

export default Register;