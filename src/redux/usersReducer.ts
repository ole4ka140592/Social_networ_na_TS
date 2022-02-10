import {ActionsTypes} from "./reduxStore";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_FETCHING = "SET_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string | null,
        large: string | null
    }
    followed: boolean
    location: {
        city: string | null
        country: string | null
    }
}

// export type UsersPageStateType = {
//     users: Array<UserType>,
//     totalUsersCount: number,
//     pageSize: number,
//     currentPage: number,
//     isFetching: boolean,
//     followingInProgress:
// }

export type UsersPageStateType = typeof usersPageState

export let usersPageState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

// export type UsersPageStateType = typeof usersPageState

export const usersReducer = (state: UsersPageStateType = usersPageState,
                             action: ActionsTypes): UsersPageStateType => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)
            }
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        case SET_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export type UsersReducerType =
    Follow
    | Unfollow
    | SetUsers
    | SetCurrentPage
    | SetTotalUsersCount
    | SetFetching
    | FollowingInProgress

export type Follow = ReturnType<typeof follow>

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export type Unfollow = ReturnType<typeof unfollow>

export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export type SetUsers = ReturnType<typeof setUsers>

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export type SetCurrentPage = ReturnType<typeof setCurrentPage>

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export type SetTotalUsersCount = ReturnType<typeof setTotalUsersCount>

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}

export type SetFetching = ReturnType<typeof setFetching>

export const setFetching = (isFetching: boolean) => {
    return {
        type: SET_FETCHING,
        isFetching: isFetching
    } as const
}

export type FollowingInProgress = ReturnType<typeof toggleFollowingProgress>

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const getUsersPageChangedThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setFetching(true))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
        //     {
        //         withCredentials: true,
        //         headers: {"API-KEY": "3ffd8bee-6a2a-4b2d-9367-b8070697f4c5"}
        //     })
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unFollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
        //     {}, {
        //         withCredentials: true,
        //         headers: {"API-KEY": "3ffd8bee-6a2a-4b2d-9367-b8070697f4c5"}
        //     })
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


