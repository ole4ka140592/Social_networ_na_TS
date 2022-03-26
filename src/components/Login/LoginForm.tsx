import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import classes from "../common/FormsControls/FormControls.module.css";
import {FormProfileDataType} from "../Profile/ProfileInfo/ProfileDataForm";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type CaptchaType = {
    captchaUrl: null | string
}

type ownType = CaptchaType & InjectedFormProps<FormDataType, CaptchaType>

export const LoginForm: React.FC<ownType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       component={Input}
                       name={"email"}
                       validate={required}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={Input}
                       name={"password"}
                       validate={required}
                       type={"password"}
                />
            </div>
            <div>
                <Field component={Input}
                       type="checkbox"
                       name={"rememberMe"}/>
                       remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field placeholder={"captcha"}
                                        component={Input}
                                        name={"captcha"}
                                        validate={required}
                                        type={"captcha"}/>}


            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType, CaptchaType>({form: "login"})(LoginForm)