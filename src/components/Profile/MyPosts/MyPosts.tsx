import React, {ChangeEvent, ChangeEventHandler, RefObject} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type PropsTypeMyPosts = {
    addPost: (values: string) => void
    // updateNewPostText: (text: string) => void
    posts: Array<PostsType>
    // newPostText: string
}

export const MyPosts = (props: PropsTypeMyPosts) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    // let onAddPost = () => {
    //     props.addPost()
    // }
    //
    // let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
    //
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.updateNewPostText(text)
    // }

    const addPostForm = (values: FormDataAddPostType) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addPostForm}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataAddPostType = {
    newPostText: string
}


const AddPostForm: React.FC<InjectedFormProps<FormDataAddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"}
                   name={"newPostText"}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataAddPostType>({form: "profileAddNewPosForm"})(AddPostForm)