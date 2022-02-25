import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileType,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// export type MapStateToPropsType = {
//     profile: ProfileType
//     status: string
//     authorizedUserId: number | null
//     isAuth: boolean
// }

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>

export type MapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: number | null) => void
    getUserStatusThunkCreator: (userId: number | null) => void
    updateUserStatusThunkCreator: (status: string) => void
}
type MapStateAndDispatchToPropsType = MapStateToPropsType & MapDispatchToPropsType
type MathParamsType = {
    userId: string
}
type AllMathParamsType = RouteComponentProps<MathParamsType>
type ProfileContainerType = MapStateAndDispatchToPropsType & AllMathParamsType


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                if (!userId) {
                    this.props.history.push("/login")
                }
            }
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatusThunkCreator}/>
            </div>
        )
    }
}

function mapStateToProps(state: AppStateType) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator, updateUserStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)