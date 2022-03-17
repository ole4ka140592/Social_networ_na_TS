import { ThunkAction } from "redux-thunk";
import {getAuthUserDataThunkCreator} from "./authReducer";
import {AppStateType} from "./reduxStore";


const INITIALIZED_SUCCESS = "SET_INITIALIZED"

type InitialStateStateType = {
    initialized: boolean
}

export let initialState = {
    initialized: false
}

type ThunkType = ThunkAction<void, AppStateType, unknown,InitializedSuccessType >

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

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    promise
        .then(()=> {
            dispatch(initializedSuccess())
        })

}



