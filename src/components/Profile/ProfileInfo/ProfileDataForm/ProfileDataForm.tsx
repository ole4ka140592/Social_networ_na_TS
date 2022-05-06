import React from "react";
import {Input, Textarea} from "../../../common/FormsControls/FormControls";
import {required} from "../../../../utils/validators/validators";
import {ProfileType} from "../../../../redux/profileReducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import classes from "./ProfileDataForm.module.css";


type ProfileDataFormType = {
    profile: ProfileType
    onSubmit: (formData: FormProfileDataType) => void
    error?: string
}

export type FormProfileDataType = {
    fullName: string,
    lookingForAJo: boolean,
    lookingForAJobDescription: string,
    aboutMe: string
}

type own = ProfileDataFormType & InjectedFormProps<FormProfileDataType, ProfileDataFormType>

const ProfileDataForm = (props: own) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.button}>
                {/*<Button variant="contained" color="success" size="small" style={{width: '250px', height: "20px"}}>save</Button>*/}
                <button className={classes.save}>SAVE</button>
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <b className={classes.color}>Full name:</b>
                {<Field placeholder={"fullName"}
                        component={Input}
                        name={"fullName"}
                        validate={required}
                        type={"fullName"}
                />}
            </div>

            <div>
                <b className={classes.color}>Looking for a job:</b>
                {<Field component={Input}
                        type="checkbox"
                        name={"lookingForAJo"}
                        // validate={required}
                />}
            </div>
            <div>
                <b className={classes.color}>My professional skills:</b>{props.profile.lookingForAJobDescription}
                {<Field component={Textarea}
                        type={"lookingForAJobDescription"}
                        name={"lookingForAJobDescription"}
                        validate={required}
                />}
            </div>
            <div>
                <b className={classes.color}>About me:</b>{props.profile.aboutMe}
                {<Field component={Textarea}
                        type={"aboutMe"}
                        name={"aboutMe"}
                />}
            </div>
            <div>
                <b className={classes.color}>Contacts:</b>

                {Object
                    .keys(props.profile.contacts)
                    .map(key => {
                        return <div key={key} className={classes.contact}>
                                <b className={classes.color}>{key}: {<Field placeholder={key}
                                    component={Input} name={"contacts." + key}/>}</b>
                        </div>
                        })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType, ProfileDataFormType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm