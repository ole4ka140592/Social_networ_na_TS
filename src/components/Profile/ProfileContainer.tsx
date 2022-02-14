import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


export type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfileThunkCreator: (userId: number)=> void
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
        if (this.props.isAuth === false) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataContainerComponent)