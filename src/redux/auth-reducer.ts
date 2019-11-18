import {ISetUserDataAction, IState, IUserData, AuthCommonAction, IErrorLoginAction, ISetLogoutAction} from "../types/auth-types";
import { authApi } from "../api/api";


export const SET_AUTH_USER_DATA = 'authReducer/SET_AUTH_USER_DATA';
export const ERROR_LOGIN_MESSAGE = 'authReducer/ERROR_LOGIN_MESSAGE';
export const SET_LOGOUT = 'authReducer/SET_LOGOUT';
export const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL';



const initialState: IState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorLoginMessage: null,
    captchaUrl: null
}

export const authReducer = (state=initialState, action:  AuthCommonAction) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case ERROR_LOGIN_MESSAGE:
            return {
                ...state,
                errorLoginMessage: action.errorMessage
            };
        case SET_LOGOUT:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false,
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default: return state
    }
};


const setAuthUserData = (data: IUserData): ISetUserDataAction => {
    return {type: SET_AUTH_USER_DATA, data}
};

const setErrorLoginMessage = (errorMessage: string): IErrorLoginAction => {
    return {type:  ERROR_LOGIN_MESSAGE, errorMessage}
};

const setLogout = (): ISetLogoutAction => {
    return {type: SET_LOGOUT}
};

const setCaptchaUrl = (captchaUrl: string) => {
    return {type: SET_CAPTCHA_URL, captchaUrl}
};


export const getAuthUserData = () => async (dispatch: any) => {
    let res = await authApi.authMe();
    if(res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data))
    }
    return res
};

export const login = (email: string, password: string, captcha: string) => async(dispatch: any) => {
    let res = await authApi.login(email, password, captcha);
    if(res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (res.data.resultCode === 1) {
        dispatch(setErrorLoginMessage(res.data.messages[0]))
    } else if (res.data.resultCode === 10) {
        dispatch(setErrorLoginMessage(res.data.messages[0]))
        dispatch(getCaptcha())
    }
};


export const logout = () => async(dispatch: any) => {
    let res = await authApi.logout();
    if(res.data.resultCode === 0) {
        dispatch(setLogout())
    }
};

const getCaptcha = () => async(dispatch: any) => {
    let res = await authApi.getCaptcha();
        dispatch(setCaptchaUrl(res.data.url))
};

