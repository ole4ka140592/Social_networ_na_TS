import React from "react";
import {Header, HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";



type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType & HeaderPropsType

export type MapStateToPropsType = typeof mapStateToProps

type MapDispatchToPropsType = {
    // setAuthUserData: (email: string | null, userId: number | null, login: string | null) => void
    getAuthUserDataThunkCreator: ()=> void
}

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()

        // authAPI.me()
        //     .then(response => {
        //     if (response.data.resultCode === 0) {
        //         this.props.setAuthUserData(response.data.data.email,
        //             response.data.data.id,
        //             response.data.data.login);
        //     }
        // })
    }
    render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {getAuthUserDataThunkCreator})(HeaderContainer)