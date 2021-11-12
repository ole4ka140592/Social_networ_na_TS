import {ActionsTypes, DialogsPageType} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yoy'},
        {id: 4, message: 'Yoy'},
        {id: 5, message: 'Yoy'},
    ],
    newMessageBody: ""
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {

        case "UPDATE-NEW-MESSAGE-BODY": {
            state.newMessageBody = action.body
            return state
        }

        case "SEND-MESSAGE": {
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            return state
        }

        default: return state
    }
}

export type UpdateNewMessageBodyAC = ReturnType<typeof updateNewMessageBodyAC>

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body
    } as const
}

export type SendMessageAC = ReturnType<typeof sendMessageAC>

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}