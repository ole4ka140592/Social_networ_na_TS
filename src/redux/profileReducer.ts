import {ActionsTypes, AppStateType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {FormProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {stopSubmit} from "redux-form";


const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type PostsType = {
    id: number
    message: string
    like: number
}

export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe: string
}

let profilePageState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It is my first post', like: 20}
    ] as Array<PostsType>,
    // newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

export type ProfilePageStateType = typeof profilePageState

export const profileReducer = (state: ProfilePageStateType = profilePageState,
                               action: ActionsTypes): ProfilePageStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                like: 0
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
            }
            return stateCopy
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case "SET_STATUS": {
            return {...state, status: action.status}
        }

        case "SAVE_PHOTO_SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }

        default:
            return state
    }
}

export type ProfileReducerType = AddPostType | SetUserProfileType | SetStatusType | SavePhotoSuccessType

export type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export type SavePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
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

export const savePhoto = (file: string) => (dispatch: Dispatch) => {
    profileAPI.savePhoto(file)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(savePhotoSuccess(res.data.data.photos))
            }
        })
}

export const saveProfile = (formData: FormProfileDataType) => (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().auth.userId
    profileAPI.saveProfile(formData)
        .then((res) => {
            debugger
            if (res.data.resultCode === 0) {
                dispatch(getUserProfileThunkCreator(userId))
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
                dispatch(stopSubmit("edit-profile", {_error: message}))
                // return Promise.reject(res.data.messages[0])
            }
        })
}