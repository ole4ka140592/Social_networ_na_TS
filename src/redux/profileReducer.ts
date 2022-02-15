import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {follow, toggleFollowingProgress} from "./usersReducer";

const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"

export type PostsType = {
    id: number
    message: string
    like: number
}

type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

export type ProfileType = {
    userId: number,
    aboutMe: null | string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos: {
        small: string | null,
        large: string | null
    }
}

let profilePageState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It is my first post', like: 20}
    ] as Array<PostsType>,
    newPostText: '',
    profile: {} as ProfileType,
    status: ''
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
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

            return stateCopy
        }

        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {
                ...state,
                newPostText: action.newText
            }

            return stateCopy
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case "SET_STATUS": {
            return {...state, status: action.status}
        }

        // case "UPDATE_STATUS": {
        //     return {...state, status: action.status}
        // }

        default:
            return state
    }
}

export type ProfileReducerType = AddPostType | UpdateNewPostTextType | SetUserProfileType
    | SetStatusType

export type SetStatusType = ReturnType<typeof setStatus>

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

// export type UpdateStatusType = ReturnType<typeof updateStatus>
//
// export const updateStatus = (status: string) => {
//     return {
//         type: UPDATE_STATUS,
//         status
//     } as const
// }


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

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


export const getUserProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatusThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatus(res.data))
        })
}

export const updateUserStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}