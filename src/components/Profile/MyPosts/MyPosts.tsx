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

    // shouldComponentUpdate(nextProps: Readonly<PropsTypeMyPosts>, nextState: Readonly<{}>): boolean {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {

        let postsElements = this.props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

        const addPostForm = (values: FormDataAddPostType) => {
            this.props.addPost(values.newPostText)
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
}

export type FormDataAddPostType = {
    newPostText: string
}

let maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataAddPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newPostText"}
                   validate={[required, maxLength10]}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataAddPostType>({form: "profileAddNewPosForm"})(AddPostForm)