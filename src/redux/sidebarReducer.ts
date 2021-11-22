import {ActionsTypes} from "./reduxStore";


export type SidebarType = {}

let initialState : SidebarType = {}

type InitialStateType = typeof initialState

export type SidebarReducerType = ReturnType<typeof sidebarReducer>

export const sidebarReducer=(state: InitialStateType = initialState, action: ActionsTypes): InitialStateType=> {

    switch(action.type) {

        default: return state

    }

}