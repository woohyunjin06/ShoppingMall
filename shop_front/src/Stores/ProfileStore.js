import {observable, action} from "mobx";

import axios from 'axios';

class ProfileStore {

    static __instance = null;
    static getInstance() {
        if(ProfileStore.__instance === null)
            ProfileStore.__instance = new ProfileStore();
        return ProfileStore.__instance;
    }

    @observable user = null;
    @observable password = null;
    @action login = async (user) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/auth/login',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: user
            });
            if(response.data.status === 200) {
                this.user = response.data.data;
                this.user.password = user.password;
                return true;
        }
            return false;
        } catch(ex) {
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action register = async (user) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/auth/register',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: user
            });
            if(response.data) {
                return response.data
            }
            else return null;
        } catch(ex) {
            alert(ex.toLocaleString());
            return null;
        }
    };

    @action editUser = async (user) => {
        if(user.username)
            this.user.username = user.username;
        if(user.email)
            this.user.email = user.email;
        if(user.password)
            this.user.password = user.password;
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/users/',
                method: 'put',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: this.user
            });
            if(response.status === 200 && response.data) {
                return true;
            }
            return false;
        } catch(ex) {
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action logout = () => {
        this.user = null;
    };
}

export default ProfileStore.getInstance();