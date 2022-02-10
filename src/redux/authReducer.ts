import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {follow, toggleFollowingProgress} from "./usersReducer";

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

export const authReducer = (state: AuthPageStateType = authPageState,
                            action: ActionsTypes): AuthPageStateType => {

    switch (action.type) {


        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}

export type AuthReducerType = SetUserData

export type SetUserData = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (email: string | null, userId: number | null, login: string | null) => {
    return {
        type: SET_USER_DATA,
        data: {
            email,
            userId,
            login
        }
    } as const
}

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(
                        response.data.data.email,
                        response.data.data.id,
                        response.data.data.login));
                }
            })
    }
}


