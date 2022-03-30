import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ContactsType,
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, ProfileType, savePhoto, saveProfile,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";

import classes from './ProfileContainer.module.css'

// export type MapStateToPropsType = ReturnType<typeof mapStateToProps>

export type MapStateToPropsType = {
    isAuth: boolean,
    profile: ProfileType,
    status: string,
    authorizedUserId: number | null
}

export type MapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: number | null) => void
    getUserStatusThunkCreator: (userId: number | null) => void
    updateUserStatusThunkCreator: (status: string) => void
    savePhoto: (image: string)=> void
    saveProfile: (formData: FormProfileDataType)=> void
}
type MapStateAndDispatchToPropsType = MapStateToPropsType & MapDispatchToPropsType
type MathParamsType = {
    userId: string
}
type AllMathParamsType = RouteComponentProps<MathParamsType>
type ProfileContainerType = MapStateAndDispatchToPropsType & AllMathParamsType


class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId

            if (!userId) {
                // if (!userId) {
                    this.props.history.push("/login")
                // }
            }
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {

        return (
            <div >
                <Profile
                    isAuth={this.props.isAuth}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatusThunkCreator}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
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
        getUserStatusThunkCreator, updateUserStatusThunkCreator, savePhoto,
        saveProfile
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)