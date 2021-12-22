import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type MapStateToPropsType = {
    profile: ProfileType
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type MapStateAndDispatchToPropsType = MapStateToPropsType & MapDispatchToPropsType

type MathParamsType = {
    userId: string
}

type AllMathParamsType = RouteComponentProps<MathParamsType>

type ProfileContainerType = MapStateAndDispatchToPropsType & AllMathParamsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data)
        })
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
    return ({
        profile: state.profilePage.profile
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)