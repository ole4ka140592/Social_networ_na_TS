import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageStateType} from "../../redux/dialogsReducer";




type PropsDialogsType = {
    dialogsPage: DialogsPageStateType
    sendMessage: ()=> void
    updateNewMessageBody: (body: string)=> void
}

export const Dialogs = (props: PropsDialogsType) => {

    let state = props.dialogsPage

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let newMassageBody = props.dialogsPage.newMessageBody


    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMassageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMassageBody}
                        onChange={onNewMassageChange}
                        placeholder="Enter your message"/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

