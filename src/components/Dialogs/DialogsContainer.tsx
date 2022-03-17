import React from "react";
import {DialogsPageStateType, sendMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithOutAutnRedirect";
import {withRouter} from "react-router-dom";

type MapStateToProps = {
    isAuth: boolean
    dialogsPage: DialogsPageStateType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string)=> void
}

export type OwnPropsType = MapDispatchToPropsType & MapStateToProps
let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    debugger
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        },
        // updateNewMessageBody: (body: string) => {
        //     dispatch(updateNewMessageBodyAC(body))
        // }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToProps,MapDispatchToPropsType,{},AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)