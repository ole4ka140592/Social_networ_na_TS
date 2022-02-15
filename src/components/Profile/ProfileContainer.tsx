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


export type MapStateToPropsType = {
    profile: ProfileType
    status: string
}
export type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
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
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId =21312
        }
        // if (!userId) {
        //     userId = 2
        // }
        this.props.getUserProfileThunkCreator(userId)
        // usersAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
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

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataContainerComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getUserStatusThunkCreator, updateUserStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)