import React from "react";

import { StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
        props.store.dispatch(updateNewPostTextAC(""))
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={onPostChange}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}