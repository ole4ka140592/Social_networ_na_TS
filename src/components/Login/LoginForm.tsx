import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       component={Input}
                       name={"login"}
                       validate={required}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={Input}
                       name={"password"}
                       validate={required}/>
            </div>
            <div>
                <Field component={Input}
                       type="checkbox"
                       name={"rememberMe"}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)