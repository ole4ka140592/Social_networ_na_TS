import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UsersPageStateType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {UsersCl} from "./UsersCl";


export type MapStateToPropsType = {
    usersPage: UsersPageStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCl)