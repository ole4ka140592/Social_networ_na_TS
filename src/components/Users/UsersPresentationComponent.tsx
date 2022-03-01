import classes from './Users.module.css'
import userPhoto from "../../assets/images/user.png"
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersPresentationComponentPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followThunkCreator: (userID: number) => void
    unFollowThunkCreator: (userID: number) => void
}

export const UsersPresentationComponent = (props: UsersPresentationComponentPropsType) => {

    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            <div>
                {
                    props.users.map(m => <User
                        user={m}
                        follow={props.follow}
                        followingInProgress={props.followingInProgress}
                        followThunkCreator={props.followThunkCreator}
                        unFollowThunkCreator={props.unFollowThunkCreator}
                        key={m.id}
                    />)
                }
            </div>
        </div>
    )
}
