import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsTypes, DialogsPageType, RootStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";


type PropsDialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes)=> void
}

export const Dialogs = (props: PropsDialogsType) => {

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let newMassageBody = props.dialogsPage.newMessageBody



    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMassageChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
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

