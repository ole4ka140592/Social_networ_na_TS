import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm";
import classes from "./ProfileContainer.module.css";

type ProfilePropsType = {
    isAuth: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string)=> void
    isOwner: boolean
    savePhoto: (image: string)=> void
    saveProfile: (formData: FormProfileDataType)=> void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                isAuth={props.isAuth}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}