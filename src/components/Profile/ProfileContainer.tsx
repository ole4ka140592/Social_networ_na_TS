import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";


type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export type MapStateToPropsType = {
    profile: ProfileType | null
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return ({
        profile: state.profilePage.profile
    })
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)