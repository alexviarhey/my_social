import {ERROR_LOGIN_MESSAGE, SET_AUTH_USER_DATA, SET_CAPTCHA_URL, SET_LOGOUT} from "../redux/auth-reducer";

export interface IState {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    errorLoginMessage: string | null,
    captchaUrl : string | null
}


export interface IUserData {
    id: number
    email: string
    login: string
}


export interface ISetUserDataAction {
    type: typeof SET_AUTH_USER_DATA
    data: IUserData
}

export interface IErrorLoginAction {
    type: typeof ERROR_LOGIN_MESSAGE,
    errorMessage: string
}

export interface ISetLogoutAction {
    type: typeof SET_LOGOUT,
}

export interface ISetCaptchaAction {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string
}

export type AuthCommonAction = ISetUserDataAction | IErrorLoginAction | ISetLogoutAction | ISetCaptchaAction

