import {ActionsTypes, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

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