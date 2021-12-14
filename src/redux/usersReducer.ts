import {ActionsTypes} from "./reduxStore";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE= "SET_CURRENT_PAGE"

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    location: {
        city: string
        country: string
    }
}

export type UsersPageStateType = {
    users: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
}

export let usersPageState = {
    users: [],
    totalUsersCount: 19,
    pageSize: 5,
    currentPage: 2,

}

// export type UsersPageStateType = typeof usersPageState

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

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }



        default:
            return state
    }
}

export type UsersReducerType = FollowAC | UnfollowAC | SetUsersAC | SetCurrentPageAC

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

export type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
