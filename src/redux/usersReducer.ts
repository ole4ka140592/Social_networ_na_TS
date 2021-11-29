
import {ActionsTypes} from "./reduxStore";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

export type UsersType = {
    id: number
    followed: boolean,
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}


export let usersPageState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: "I am boss",
            location: {city: "Minsk", country: "Belarus"}},
        {id: 2, followed: true, fullName: 'Andrey', status: "I am boss",
            location: {city: "Moscow", country: "Russia"}},
        {id: 3, followed: false, fullName: 'Svetlana', status: "I am boss",
            location: {city: "Kiev", country: "Ukraine"}}
    ] as Array<UsersType>

}

export type UsersPageStateType = typeof usersPageState


export const usersReducer = (state: UsersPageStateType = usersPageState,
                               action: ActionsTypes): UsersPageStateType => {


    switch (action.type) {


        default:
            return state
    }
}

export type UsersReducerType = FollowAC | UnfollowAC

export type FollowAC = ReturnType<typeof followAC>

export const followAC = () => {
    return {
        type: FOLLOW
    } as const
}

export type UnfollowAC = ReturnType<typeof unfollowAC>

export const unfollowAC = () => {
    return {
        type: UNFOLLOW
    } as const
}
