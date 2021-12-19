import React from "react";

import {addPost, PostsType, updateNewPostText} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";


// export const MyPostsContainer = (props: MyPostsContainerType) => {
//
//     let state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostAC(state.profilePage.newPostText))
//         props.store.dispatch(updateNewPostTextAC(""))
//     }
//
//     let onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//
// }


type MapStateToProps = {
    posts: Array<PostsType>,
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         updateNewPostText: (text: string) => {
//             dispatch(updateNewPostTextAC(text))
//         },
//         addPost: () => {
//             dispatch(addPostAC())
//             dispatch(updateNewPostTextAC(""))
//         }
//
//     }
// }


export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost
})(MyPosts)
