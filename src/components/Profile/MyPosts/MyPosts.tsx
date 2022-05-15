import React, {PureComponent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


type PropsTypeMyPosts = {
    addPost: (values: string) => void
    posts: Array<PostsType>
}

export class MyPosts extends PureComponent<PropsTypeMyPosts> {

    render() {

        let postsElements = this.props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

        const addPostForm = (values: FormDataAddPostType) => {
            this.props.addPost(values.newPostText)
            values.newPostText=""
        }


        return (
            <div className={classes.postsBlock}>
                <h2 className={classes.myPosts}>My posts</h2>
                <div>
                    <AddPostFormRedux onSubmit={addPostForm}/>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
}

export type FormDataAddPostType = {
    newPostText: string
}

let maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataAddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.post}>
            <Field component={Textarea}
                   name={"newPostText"}
                   validate={[required, maxLength10]}
                   className={classes.field}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataAddPostType>({form: "profileAddNewPosForm"})(AddPostForm)