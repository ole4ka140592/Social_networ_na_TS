import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UsersPageStateType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import {UsersCl} from "./UsersCl";


export type MapStateToPropsType = {
    usersPage: UsersPageStateType
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        usersPage: state.usersPage
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