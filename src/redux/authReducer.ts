import {Dispatch} from "redux";
import {authAPI, captchaAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SAMURAI-NETWORK/AUTH/SET_USER_DATA"
const GET_CAPTCHA_URL = "SAMURAI-NETWORK/AUTH/GET_CAPTCHA_URL"

export type AuthPageStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: null | string
}

export let authPageState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: AuthPageStateType = authPageState, action: AuthReducerType)
    : AuthPageStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                isAuth: action.isAuth,
                userId: action.userId,
                email: action.email,
                login: action.login
            }
        }

        case GET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state
    }
}

export type AuthReducerType = SetUserData | GetCaptchaUrlType
export type SetUserData = ReturnType<typeof setAuthUserData>
export type GetCaptchaUrlType = ReturnType<typeof getCaptchaUrl>

export const setAuthUserData = (userId: number | null, login: string | null,
                                email: string | null,
                                isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        userId,
        login,
        email,
        isAuth
    } as const
}

export const getCaptchaUrl = (captchaUrl: null | string) => {
    return {
        type: GET_CAPTCHA_URL,
        payload: {captchaUrl}
    } as const
}

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                debugger
                dispatch(setAuthUserData(id, login, email, true));
            }
        })

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string) =>
    (dispatch: any) => {
        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator());
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrlTC())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }

export const loginOuth = () => (dispatch: Dispatch) => {
    authAPI.logOuth()
        .then(response => {

            if (response.data.resultCode === 0) {

                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


export const getCaptchaUrlTC = () => (dispatch: any) => {
    captchaAPI.captcha()
            .then(response => {
                const captchaUrl = response.data.url
                dispatch(getCaptchaUrl(captchaUrl))
            })
    }



