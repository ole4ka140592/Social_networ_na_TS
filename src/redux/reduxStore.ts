import {combineReducers, createStore} from "redux";
import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profileReducer";
import {dialogsReducer, SendMessageAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer, SidebarType} from "./sidebarReducer";


export type ActionsTypes = AddPostACType
    | UpdateNewPostTextACType
    | UpdateNewMessageBodyAC
    | SendMessageAC

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(rootReducer)


// @ts-ignore
window.store=store