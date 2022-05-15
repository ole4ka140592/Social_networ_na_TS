import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/profileReducer";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {Redirect} from "react-router-dom";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm/ProfileDataForm";


export type ProfileInfoPropsType = {
    isAuth: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (image: string) => void
    saveProfile: (formData: FormProfileDataType) => void
}

export type DataPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }
    if (!props.isAuth) return <Redirect to={'/login'}/>


    const onSubmit = async (formData: FormProfileDataType) => {
        await props.saveProfile(formData)
        setEditMode(false)
    }


    return (

            <div >
                <div className={classes.profileUserPhotoStatus}>
                    <div className={classes.profileUserPhoto}>
                        <img src={props.profile.photos.large || userPhoto} className={classes.photo}/>
                        <div className={classes.abc}>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={classes.custom}/>}</div>
                    </div>
                    <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>

                <div >
                {editMode
                    ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit} initialValues={props.profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}
                </div>
            </div>

    )
}

export const ProfileData = (props: DataPropsType) => {
    return (
        <div>
            {props.isOwner && <div className={classes.edit}>
                {/*<Button variant="contained" onClick={props.goToEditMode} size="small" style={{width: '250px', height: "20px"}}>edit</Button>*/}
                <button className={classes.button} onClick={props.goToEditMode}>EDIT</button>
            </div>}
            <div>
                <b className={classes.color}>Full name: </b>
                {props.profile.fullName}
            </div>
            <div>
                <b className={classes.color}>Looking for a job: </b>
                {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {/*{props.profile.lookingForAJob &&*/}
            <div className={classes.professionalSkills}>
                <b className={classes.color}> My professional skills: </b>
                <div className={classes.professional}>{props.profile.lookingForAJobDescription}</div>
            </div>
            {/*}*/}
            <div>
                <b className={classes.color}>About me: </b>
                <div className={classes.professional}>{props.profile.aboutMe}</div>
            </div>
            <div>
                <b className={classes.color}>Contacts: </b>

                {Object
                    .keys(props.profile.contacts)
                    .map(key => {

                            return <Contact key={key} contactTitle={key}
                                            contactValue={props.profile.contacts[key as keyof ContactsType]}/>
                        }
                    )}
            </div>
        </div>
    )
}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b className={classes.color}>{contactTitle}: </b>{contactValue}</div>
}