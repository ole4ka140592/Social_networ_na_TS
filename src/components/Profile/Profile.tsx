import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    isAuth: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string)=> void
    isOwner: boolean
    savePhoto: (image: string)=> void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                isAuth={props.isAuth}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}