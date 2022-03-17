import React from "react";
import classes from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {Redirect} from "react-router-dom";


export type ProfileInfoPropsType = {
    isAuth: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (image: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={classes.photo}/>
                    <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                </div>
                <div>
                    <div>
                        <b>Full name</b>{props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job:</b>{props.profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b>{props.profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me:</b>{props.profile.aboutMe}
                    </div>
                    {/*<div>*/}
                    {/*    <b>Contacts:</b>*/}
                    {/*    {Object*/}
                    {/*        .keys(props.profile.contacts)*/}
                    {/*        .map(key=> {*/}
                    {/*    return <Contact key={key} contactTitle={key}*/}
                    {/*                    contactValue={props.profile.contacts[key as keyof ContactsType]}/>*/}
                    {/*    }*/}
                    {/*    )}*/}
                    {/*</div>*/}



                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}



type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b>{contactValue}</div>
}