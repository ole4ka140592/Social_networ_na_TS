import {ActionsTypes} from "./reduxStore";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UserType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export let usersPageState = {
    users: [] as Array<UserType>
}

export type UsersPageStateType = typeof usersPageState

export const usersReducer = (state: UsersPageStateType = usersPageState,
                             action: ActionsTypes): UsersPageStateType => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)
            }
        }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
}

export type UsersReducerType = FollowAC | UnfollowAC | SetUsersAC

export type FollowAC = ReturnType<typeof followAC>

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export type UnfollowAC = ReturnType<typeof unfollowAC>

export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}

export type SetUsersAC = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
