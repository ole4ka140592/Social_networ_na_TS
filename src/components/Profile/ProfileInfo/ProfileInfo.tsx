import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {Redirect} from "react-router-dom";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";


export type ProfileInfoPropsType = {
    isAuth: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (image: string) => void
    saveProfile: (formData: FormProfileDataType)=> void
}

export type DataPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: ()=> void
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }
    if (!props.isAuth) return <Redirect to={'/login'}/>


    const onSubmit = async (formData: FormProfileDataType) => {
        await props.saveProfile(formData)
        setEditMode(false)
        // props.saveProfile(formData).then(
        //     ()=> {
        //         setEditMode(false)
        //     })
        }




    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={classes.photo}/>
                    <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                {editMode
                    ? <ProfileDataForm profile={props.profile}  onSubmit={onSubmit} initialValues={props.profile}/>
                    :<ProfileData goToEditMode={()=>{setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
            </div>
        </div>
    )
}

export const ProfileData = (props: DataPropsType) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b>{props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {/*{props.profile.lookingForAJob &&*/}
            <div>
                <b>My professional skills:</b>{props.profile.lookingForAJobDescription}
            </div>
            {/*}*/}
            <div>
                <b>About me:</b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>

                {Object
                    .keys(props.profile.contacts)
                    .map(key=> {

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
    return <div className={classes.contact}><b>{contactTitle}:</b>{contactValue}</div>
}