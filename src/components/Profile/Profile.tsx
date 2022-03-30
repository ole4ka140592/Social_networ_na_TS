import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import classes from "./Profile.module.css";
import {Paper} from "@material-ui/core";

type ProfilePropsType = {
    isAuth: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (image: string) => void
    saveProfile: (formData: FormProfileDataType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <Paper style={{width: '400px'}}>
                <ProfileInfo
                    isAuth={props.isAuth}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                />
                </Paper>

            </div>
            <div className={classes.myPostsContainer}>
                <Paper style={{width: '400px'}}>
                <MyPostsContainer/>
                </Paper>
            </div>

        </div>
    )
}