import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Dialogs} from "../Dialogs/Dialogs";


export type MapStateToPropsType = {
    profile: ProfileType
}

export type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfileThunkCreator: (userId: number) => void
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
        // if (!userId) {
        //     userId = 2
        // }
        this.props.getUserProfileThunkCreator(userId)
        // usersAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        profile: state.profilePage.profile
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataContainerComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect)(ProfileContainer)