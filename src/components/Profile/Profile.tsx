import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type PropsTypeProfile= {
    // addPost: (postMessage: string)=> void
    profilePage: ProfilePageType
    // updateNewPostText: (newText: string)=> void
    dispatch: (action: ActionsTypes)=> void
}

export const Profile = (props: PropsTypeProfile) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
                     />
        </div>
    )
}