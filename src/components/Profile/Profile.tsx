import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import classes from "./Profile.module.css";
import {Paper} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

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

    const authId = useSelector<AppStateType, number | null>(state=> state.auth.userId)
    const profileId = useSelector<AppStateType, number | undefined>(state=> state.profilePage.profile?.userId)

    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <Paper>
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
            {authId === profileId ? <div className={classes.myPostsContainer}>
                <Paper>
                    <MyPostsContainer/>
                </Paper                   >
            </div> : ""}

        </div>
    )
}