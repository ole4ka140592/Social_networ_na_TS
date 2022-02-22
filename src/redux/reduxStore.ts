import {applyMiddleware, combineReducers, createStore} from "redux";
import {AddPostType, profileReducer, ProfileReducerType} from "./profileReducer";
import {dialogsReducer, SendMessageAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer, UsersReducerType} from "./usersReducer";
import {authReducer, AuthReducerType} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer, InitializedSuccessType} from "./appReducer";


export type ActionsTypes = AddPostType | SendMessageAC | ProfileReducerType | AuthReducerType
    |UsersReducerType | InitializedSuccessType


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store