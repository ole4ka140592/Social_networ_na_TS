import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PropsTypeProfile = {
    store: StoreType
}

export const Profile = (props: PropsTypeProfile) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}