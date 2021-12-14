import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {UsersPresentationComponent} from "./UsersPresentationComponent";

type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <UsersPresentationComponent onPageChanged={this.onPageChanged}
                                           totalUsersCount={this.props.totalUsersCount}
                                           pageSize={this.props.pageSize}
                                           currentPage={this.props.currentPage}
                                           unfollow={this.props.unfollow}
                                           follow={this.props.follow}
                                           users={this.props.users}
        />
    }
}


export type MapStateToPropsType = {
    users: Array<UserType>,
    // usersPage: UsersPageStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersPage.users,
        // usersPage: state.usersPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

