import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={classes.photo}/>
                </div>
                <div>
                    {props.profile.fullName}
                    {props.profile.lookingForAJobDescription}
                    {props.profile.lookingForAJob}
                    {props.profile.contacts.vk}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}