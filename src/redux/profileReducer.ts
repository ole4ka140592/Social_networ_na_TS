import {ActionsTypes, PostsType, ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It is my first post', like: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case "ADD-POST": {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        }

        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText
            return state
        }

        default: return state
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}