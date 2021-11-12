import {AddPostACType, profileReducer, UpdateNewPostTextACType} from "./profileReducer";
import {dialogsReducer, SendMessageAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type PostsType = {
    id: number
    message: string
    like: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostACType
    | UpdateNewPostTextACType
    | UpdateNewMessageBodyAC
    | SendMessageAC

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 15},
                {id: 2, message: 'It is my first post', like: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yoy'},
                {id: 4, message: 'Yoy'},
                {id: 5, message: 'Yoy'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderEntireTree()
    }
}









