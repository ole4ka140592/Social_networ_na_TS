import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {follow, followThunkCreator, getUsersPageChangedThunkCreator, getUsersThunkCreator,
    toggleFollowingProgress,
    unfollow, unFollowThunkCreator,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import {UsersPresentationComponent} from "./UsersPresentationComponent";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.setFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersPageChangedThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.setFetching(true)
        //
        // usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        //         this.props.setFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : ""}
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
        </>
    }
}


type MapStateToPropsType = {
    users: Array<UserType>,
    // usersPage: UsersPageStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    // setUsers: (users: Array<UserType>) => void
    // setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // setFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number)=> void
    getUsersPageChangedThunkCreator: (pageNumber: number, pageSize: number)=> void
    followThunkCreator: (userId: number)=> void
    unFollowThunkCreator: (userId: number)=> void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersPage.users,
        // usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// export default withAuthRedirect(connect(mapStateToProps, {
//     follow, unfollow,
//     // setUsers, setCurrentPage,
//     // setTotalUsersCount, setFetching,
//     toggleFollowingProgress,
//     getUsers: getUsersThunkCreator,
//     getUsersPageChangedThunkCreator,
//     followThunkCreator, unFollowThunkCreator
// })(UsersContainer))

// let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow,
        // setUsers, setCurrentPage,
        // setTotalUsersCount, setFetching,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,
        getUsersPageChangedThunkCreator,
        followThunkCreator, unFollowThunkCreator
    })
)(UsersContainer)