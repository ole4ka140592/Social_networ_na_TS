import React from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageStateType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {reduxForm, Field, InjectedFormProps} from "redux-form";



type PropsDialogsType = {
    dialogsPage: DialogsPageStateType
    sendMessage: (newMessageBody: string)=> void
    updateNewMessageBody: (body: string)=> void
    isAuth: boolean
}

export const Dialogs = (props: PropsDialogsType) => {

    let state = props.dialogsPage

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    // let newMassageBody = props.dialogsPage.newMessageBody


    // const onSendMessageClick = () => {
    //     props.sendMessage()
    // }

    // const onNewMassageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.updateNewMessageBody(body)
    // }

    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMassageBody)
    }

    if (props.isAuth === false) return <Redirect to={"/login"}/>


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


type FormDataType = {
    newMassageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={"textarea"}
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

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)