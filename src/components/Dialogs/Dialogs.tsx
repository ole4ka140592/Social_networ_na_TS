import React from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageStateType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {OwnPropsType} from "./DialogsContainer";
import {Preloader} from "../common/Preloader/Preloader";



// type PropsDialogsType = {
//     dialogsPage: DialogsPageStateType
//     sendMessage: (newMessageBody: string)=> void
//     updateNewMessageBody: (body: string)=> void
//     isAuth: boolean
// }

export const Dialogs = (props: OwnPropsType) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const addNewMessage = (values: FormDataAddMessageType) => {
        props.sendMessage(values.newMassageBody)
    }

    if (!props.isAuth) {return <Redirect to={"/login"}/>}

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

type FormDataAddMessageType = {
    newMassageBody: string
}

const  maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataAddMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={Textarea}
                        validate={[required, maxLength50]}
                        name={"newMassageBody"}
                        placeholder={"Enter your message"}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataAddMessageType>({form: "dialogAddMessageForm"})(AddMessageForm)