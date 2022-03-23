import React from "react";
import {Input, Textarea} from "../../common/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";
import {ContactsType, ProfileType} from "../../../redux/profileReducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Contact} from "./ProfileInfo";
import classes from "./ProfileInfo.module.css";


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
            <div>
                <button>save</button>
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <b>Full name:</b>
                {<Field placeholder={"fullName"}
                        component={Input}
                        name={"fullName"}
                        validate={required}
                        type={"fullName"}
                />}
            </div>

            <div>
                <b>Looking for a job:</b>
                {<Field component={Input}
                        type="checkbox"
                        name={"lookingForAJo"}
                        // validate={required}
                />}
            </div>
            <div>
                <b>My professional skills:</b>{props.profile.lookingForAJobDescription}
                {<Field component={Textarea}
                        type={"lookingForAJobDescription"}
                        name={"lookingForAJobDescription"}
                        validate={required}
                />}
            </div>
            <div>
                <b>About me:</b>{props.profile.aboutMe}
                {<Field component={Textarea}
                        type={"aboutMe"}
                        name={"aboutMe"}
                />}
            </div>
            <div>
                <b>Contacts:</b>

                {Object
                    .keys(props.profile.contacts)
                    .map(key => {
                        return <div key={key} className={classes.contact}>
                                <b>{key}: {<Field placeholder={key}
                                    component={Input} name={"contacts." + key}/>}</b>
                        </div>
                        })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType, ProfileDataFormType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm