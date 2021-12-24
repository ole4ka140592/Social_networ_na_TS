import {ActionsTypes} from "./reduxStore";

const SET_USER_DATA = "SET_USER_DATA"

export type AuthPageStateType = typeof authPageState

export let authPageState = {
    userId: null,
    email: null,
    login: null
}

export const authReducer = (state: AuthPageStateType = authPageState,
                             action: ActionsTypes): AuthPageStateType => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state
    }
}

export type AuthReducerType = SetUserData

export type SetUserData = ReturnType<typeof setUserData>

export const setUserData = (userID: null, email: null, login: null) => {
    return {
        type: SET_USER_DATA,
        data: {
            userID,
            email,
            login
        }
    } as const
}


