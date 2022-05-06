import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";
import {Redirect} from "react-router-dom";


const Login: React.FC<MapDispatchToPropsType & MapStateToPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }


    if (props.isAuth) {
        debugger
        return <Redirect to={"/profile"}/>
    }


    return <div >
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

    </div>
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: null | string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)
