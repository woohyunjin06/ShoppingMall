import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class Register extends Component {
    componentDidMount() {

    }

    state = {
        username: '',
        password: '',
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
                <div className='login_element_container'>
                    <div className='register-form'>
                        <div className='label-field'>희망 아이디:</div>
                        <div className='form-field'><input value={this.state.username}onChange={this.updateUsername}/></div>
                        <div className='label-field'>희망 비밀번호</div>
                        <div className='form-field'><input value={this.state.password} type='password' onChange={this.updatePassword}/></div>
                        <div className='label-field'>비밀번호 확인</div>
                        <div className='form-field'><input value={this.state.password} type='password' onChange={this.updatePassword}/></div>
                        <div className='label-field'>성명</div>
                        <div className='form-field'><input value={this.state.name} onChange={this.updateName}/></div>
                        <div className='label-field'>전화번호:</div>
                        <div className='form-field'><input value={this.state.homeNumber} onChange={this.updateHomeNumber}/></div>
                        <div className='label-field'>핸드폰:</div>
                        <div className='form-field'><input value={this.state.phoneNumber} onChange={this.updatePhoneNumber}/></div>
                        <div className='label-field'>우편번호:</div>
                        <div className='form-field'><input value={this.state.zipCode} onChange={this.updateZipCode}/></div>
                        <div className='label-field'>주소:</div>
                        <div className='form-field'><input value={this.state.address} onChange={this.updateAddress}/></div>
                        <div className='label-field'>이메일 주소:</div>
                        <div className='form-field'><input value={this.state.email} onChange={this.updateEmail}/></div>
                    </div>

                    <div className='label-field'>회원약관</div>
                    <textarea className='rule-area' readOnly value="약관입니다."/>

                    <div onChange={this.updateAgree}>
                        회원약관에
                        <input type='radio' name='agree' value='yes'/>동의함
                        <input type='radio' name='agree' value='no'/>동의하지않음
                    </div>
                    <div><button onClick={this.registerUser}>회원가입</button></div>
                </div>
        );
    }

    registerUser = async () => {
        if(this.state.isAgree === 'no') {
            alert("약관에 동의해주시기 바랍니다.");
        }
        let result = await this.props.stores.profileStore.register(this.state);
        if(result.status === 200) {
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