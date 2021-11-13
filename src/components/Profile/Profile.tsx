import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PropsTypeProfile = {
    store: StoreType
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: PropsTypeProfile) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                // posts={props.profilePage.posts}
                //               dispatch={props.dispatch}
                //               newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}