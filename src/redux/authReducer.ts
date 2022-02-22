import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA"

export type AuthPageStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export let authPageState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthPageStateType = authPageState, action: AuthReducerType)
    : AuthPageStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        default:
            return state
    }
}

export type AuthReducerType = SetUserData
export type SetUserData = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, login: string | null,
                                email: string | null,
                                isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true));
            }
        })

}

export const login = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator());
                } else {
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



