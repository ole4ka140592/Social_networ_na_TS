import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow, followThunkCreator, getUsersPageChangedThunkCreator, getUsersThunkCreator,
    toggleFollowingProgress,
    unfollow, unFollowThunkCreator,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import {UsersPresentationComponent} from "./UsersPresentationComponent";

import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";
import Preloader2 from "../common/Preloader/Preloader2";
import classes from "./UsersContainer.module.css";


type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersPageChangedThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <div className={classes.container}>
            <div className={classes.preloader2}>
                {this.props.isFetching
                ? <Preloader2/>
                : ""}
            </div>
            <div>
                <UsersPresentationComponent onPageChanged={this.onPageChanged}
                                            totalUsersCount={this.props.totalUsersCount}
                                            pageSize={this.props.pageSize}
                                            currentPage={this.props.currentPage}
                                            unfollow={this.props.unfollow}
                                            follow={this.props.follow}
                                            users={this.props.users}
                                            followingInProgress={this.props.followingInProgress}
                                            toggleFollowingProgress={this.props.toggleFollowingProgress}
                                            followThunkCreator={this.props.followThunkCreator}
                                            unFollowThunkCreator={this.props.unFollowThunkCreator}

                />
            </div>
        </div>
    }
}


type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    getUsersPageChangedThunkCreator: (pageNumber: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,
        getUsersPageChangedThunkCreator,
        followThunkCreator, unFollowThunkCreator
    })
)(UsersContainer)