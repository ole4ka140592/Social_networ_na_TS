import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType, RootStateType} from "../../redux/state";



export const Dialogs = (props:  {dialogsPage: DialogsPageType}) => {


    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

