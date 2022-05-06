import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import classes from "../common/FormsControls/FormControls.module.css";
import style from "./Login.module.css";
import {
    FormControl, FormLabel,
    Grid,
} from "@material-ui/core";

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
        <form onSubmit={props.handleSubmit} className={style.login}>
            <div>
                <Grid container justifyContent={'center'}>
                    <Grid item justifyContent={'center'}>
                        <FormControl>
                            <FormLabel style={{
                                padding: '10px', width: '300px', margin: "1px",
                                display: "flex-row", textAlign: "center"
                            }}>
                                <p>To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                               target={'_blank'}> here
                                </a> or use common test account credentials:</p>
                                <p>Email: free.it.free1@gmail.com</p>
                                <p>Password: 123456789</p>
                            </FormLabel>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div>
                <div>
                    <Field placeholder={"Email"}
                           component={Input}
                           name={"email"}
                           validate={required}
                           className={style.inputBorder}
                    />
                </div>
                <div>
                    <Field placeholder={"Password"}
                           component={Input}
                           name={"password"}
                           validate={required}
                           type={"password"}
                           className={style.inputBorder}
                    />
                </div>
                <div className={style.checkbox}>
                    <div>
                        <Field component={Input}
                               type="checkbox"
                               name={"rememberMe"}/>
                    </div>
                    <div className={style.color}>remember me</div>
                </div>
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field placeholder={"captcha"}
                                        component={Input}
                                        name={"captcha"}
                                        validate={required}
                                        type={"captcha"}/>}

            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button className={classes.button}>LOGIN</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType, CaptchaType>({form: "login"})(LoginForm)