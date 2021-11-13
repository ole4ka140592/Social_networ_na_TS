import React, {ChangeEvent, ChangeEventHandler, RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    PostsType,
} from "../../../redux/store";


type PropsTypeMyPosts = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    posts: Array<PostsType>
    newPostText: string
}

export const MyPosts = (props: PropsTypeMyPosts) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let newPostElement : RefObject<HTMLTextAreaElement> = React.createRef()

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text=e.currentTarget.value
        props.updateNewPostText(text)
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                        ref={newPostElement}
                        />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}