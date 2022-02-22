import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {getAuthUserDataThunkCreator, setAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = "SET_INITIALIZED"

type InitialStateStateType = {
    initialized: boolean
}

export let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: InitializedSuccessType): InitialStateStateType=> {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }
}

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export const inizializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    Promise.all([promise])
        .then(()=> {
            dispatch(initializedSuccess())
        })
}



