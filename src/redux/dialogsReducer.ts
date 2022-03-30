import {ActionsTypes} from "./reduxStore";

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
// export type DialogsPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
//     newMessageBody: string
// }

export let dialogsPageState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Where you from?'},
        {id: 4, message: 'How old are you?'},
        {id: 5, message: 'Bye!'},
    ] as Array<MessagesType>,
    // newMessageBody: ""
}

export type DialogsPageStateType = typeof dialogsPageState


export const dialogsReducer = (state: DialogsPageStateType = dialogsPageState,
                               action: ActionsTypes): DialogsPageStateType => {


    switch (action.type) {
        // case "UPDATE-NEW-MESSAGE-BODY": {
        //     let stateCopy = {
        //         ...state,
        //         newMessageBody: action.body
        //     }
        //     return stateCopy
        // }

        case "SEND-MESSAGE": {
            let body = action.newMessageBody
            let stateCopy = {
                ...state,
                // newMessageBody : "",
                messages: [...state.messages, {id: 6, message: body}]
            }

            return stateCopy
        }

        default:
            return state
    }
}

export type DialogsReducerType = SendMessageAC
    // | UpdateNewMessageBodyAC

// export type UpdateNewMessageBodyAC = ReturnType<typeof updateNewMessageBodyAC>
//
// export const updateNewMessageBodyAC = (body: string) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         body
//     } as const
// }

export type SendMessageAC = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
    } as const
}