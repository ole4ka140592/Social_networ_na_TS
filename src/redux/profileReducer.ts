import {ActionsTypes} from "./reduxStore";

export type PostsType = {
    id: number
    message: string
    like: number
}

let profilePageState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It is my first post', like: 20}
    ] as Array<PostsType>,
    newPostText: ''
}

export type ProfilePageStateType = typeof profilePageState

export const profileReducer = (state: ProfilePageStateType = profilePageState,
                               action: ActionsTypes): ProfilePageStateType => {
    switch (action.type) {

        case "ADD-POST": {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 0
            }
            let stateCopy = {...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

            return stateCopy
        }

        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state,
                newPostText: action.newText
            }

            return stateCopy
        }

        default: return state
    }
}

export type ProfileReducerType = AddPostACType | UpdateNewPostTextACType

export type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}