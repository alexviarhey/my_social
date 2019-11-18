import axios from 'axios'


const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '33878ebc-b501-44f7-a7ed-cbb2f68bb368'
        }
    }
);

export const authApi = {
    authMe() {
        return instance.get('auth/me')
    },

    login (email: string, password: string, captcha: string) {
        return instance.post(`auth/login`, {email, password, captcha})
    },

    logout () {
        return instance.delete(`auth/login`)
    },

    getCaptcha () {
        return instance('security/get-captcha-url')
    }
};

export const profileApi = {
    getUserProfile (userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status})
    }

};