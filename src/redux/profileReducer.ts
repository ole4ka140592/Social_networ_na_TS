import {ActionsTypes} from "./reduxStore";

const SET_USER_PROFILE = "SET_USER_PROFILE"

export type PostsType = {
    id: number
    message: string
    like: number
}

export type ProfileType = {
    aboutMe: null | string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: null | string,
    userId: number,
    photos: {
        "small": null | string,
        "large": null | string
    }
}

let profilePageState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It is my first post', like: 20}
    ] as Array<PostsType>,
    newPostText: '',
    profile: {} as ProfileType | null
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

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default: return state
    }
}

export type ProfileReducerType = AddPostType | UpdateNewPostTextType | SetUserProfileType

export type AddPostType = ReturnType<typeof addPost>

export const addPost = () => {
    return {
        type: "ADD-POST",
    } as const
}

export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>

export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}