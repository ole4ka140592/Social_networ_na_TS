import React from "react";
import {Header, HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {loginOuth} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";


type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType & HeaderPropsType

export type MapStateToPropsType = typeof mapStateToProps

type MapDispatchToPropsType = {
    loginOuth: ()=> void
}

class HeaderContainer extends React.Component<AuthPropsType> {

    render() {
    return <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        loginOuth={this.props.loginOuth}
    />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {loginOuth})
(HeaderContainer)