import {combineReducers, createStore} from "redux";
import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profileReducer";
import {dialogsReducer, SendMessageAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer, SidebarType} from "./sidebarReducer";
import {FollowAC, SetUsersAC, UnfollowAC, usersReducer, UsersReducerType} from "./usersReducer";


export type ActionsTypes = AddPostACType
    | UpdateNewPostTextACType
    | UpdateNewMessageBodyAC
    | SendMessageAC
    | UsersReducerType

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export let store = createStore(rootReducer)

// @ts-ignore
window.store=store