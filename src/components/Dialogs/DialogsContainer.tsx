import React from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type PropsDialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsDialogsContainerType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMassageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }


    return <Dialogs dialogsPage={state}
                    sendMessage={onSendMessageClick}
                    updateNewMessageBody={onNewMassageChange}/>
}

