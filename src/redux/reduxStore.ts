import {applyMiddleware, combineReducers, createStore} from "redux";
import {AddPostType, profileReducer, ProfileReducerType, UpdateNewPostTextType} from "./profileReducer";
import {dialogsReducer, SendMessageAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer, UsersReducerType} from "./usersReducer";
import {authReducer, AuthReducerType} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";


export type ActionsTypes = AddPostType
    | UpdateNewPostTextType
    | SendMessageAC
    | ProfileReducerType
    | AuthReducerType
|UsersReducerType


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store