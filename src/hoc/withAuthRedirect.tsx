import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";
import {ReactComponent} from "*.svg";
import {Preloader} from "../components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

type OwnType = ComponentType & MapStateToPropsType

export function withAuthRedirect<T>(Component: any) {
// debugger
//     const RedirectComponent = (props: MapStateToPropsType) => {
//         let {isAuth, ...restProps} = props
// debugger
//         if (!isAuth) {return <Redirect to={"/login"}/>}
//
//         return <Component {...restProps as T}/>
//         debugger
//     }

    class RedirectComponent extends React.Component<OwnType> {
        render() {
            // if (!this.props.initialized) {
            //     return <Preloader/>
            // }
            if (!this.props.isAuth && !this.props.initialized) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }

    }

    debugger
    let ConnectedRedirectComponent = connect(mapStateToProps, null)(RedirectComponent)
    return ConnectedRedirectComponent
}
