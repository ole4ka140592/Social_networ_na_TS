import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    ActionsTypes,
    PostsType,

} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type PropsTypeMyPosts = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes)=> void
}

export const MyPosts = (props: PropsTypeMyPosts) => {


    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)


    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(updateNewPostTextAC(""))
        // props.addPost(props.newPostText)
        // props.updateNewPostText('')
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
        // props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}